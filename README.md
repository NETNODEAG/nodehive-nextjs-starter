# nodehive-nextjs-starter

## 1. Installation

### 1.1 Create a new Next.js app

Create a new Next.js app using one of the following starter templates, where everything is set up for you automatically.

**Basic starter**

```
npx create-next-app frontend.example.ch -e https://github.com/NETNODEAG/nodehive-nextjs-starter/tree/main
```

### 1.2 Linking Your Frontend to Drupal

Here are the streamlined steps to connect your frontend with Drupal:

1. Navigate to your frontend project directory:

```
cd frontend.example.ch
```

2. Create a local environment file from the example:

```
cp .env.example .env.local
```

3. Open `.env.local` and populate the necessary environment variables required for Drupal deployments. Refer to your Drupal deployment documentation for specifics. Save the changes when done.

### 1.2 Run the project!

```
cd frontend.example.ch
nvm use
npm install
npm run dev
```

### 1.3 Adapt the project to your needs

#### Startpage

To change the default landing page of your application, follow the steps outlined below. This process involves modifying the `STARTPAGE_SLUG` value to reflect the Node ID of the page you wish to make your new start page.

1. Locate File: Go to your project's `src/app/` directory and open `page.tsx`.
2. Change Value: Find the `STARTPAGE_SLUG` constant and replace its current value with your desired Node ID as a string (e.g., "12345").
3. Save and Test: Save the file, then run the application to confirm that the new start page matches the specified Node ID.



## 3. Deployment

### 3.1 Deploy to Vercel

The most common way to create a Deployment on Vercel is through pushing code to Git repositories Creating an automatic Deployment begins by importing a Git repository on Vercel.

#### 3.1.1 New project

The next step is to create a new project from the Vercel Dashboard. Follow https://vercel.com/new/netnodeag

#### 3.1.2 Project settings

##### Build & Development Settings

1. Set the Framework Preset to Next.js
2. Use the Node version specified within the .nvmrc file.
3. Provide the following environment variables:

- `NEXT_IMAGE_DOMAIN`
- `NEXT_PUBLIC_DRUPAL_REST_BASE_URL`
- `NEXT_PUBLIC_DRUPAL_BASE_URL`

