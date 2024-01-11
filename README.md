# nodehive-nextjs-starter

## 1. Installation

### 1.1 Create a new Next.js app

Create a new Next.js app using one of the following starter templates, where everything is set up for you automatically.

**Basic starter**

```
npx create-next-app frontend.example.ch -e https://github.com/NETNODEAG/nodehive-nextjs-starter.git
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

## 2. Create git repo & push code

### 2.1 New repository

Create a new repository: https://bitbucket.org/NETNODEAG/workspace/create/repository

#### 2.2 Commit the project

Run:

```
git init
git remote add origin git@bitbucket.org:NETNODEAG/change-to-your-git-repo.git
git add .
git commit -am "Inital commit"
git push -u origin main
```

#### 2.3 Infrastructure

Edit `.infrastructure` file

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

### 3.2 Deploy to Docker Host

Get ssh pub key from docker host and add it to the git repository

```
task nn-ssh-prod-root
cat .ssh/id_rsa.pub
```

Copy the key to (Example: https://bitbucket.org/NETNODEAG/example.ch/admin/access-keys/)

Login to the project docker host

```
task nn-ssh-prod-root
git clone git@bitbucket.org:NETNODEAG/change-to-your-git-repo.git
```

Inside repo folder

```
cp .env.example .env
vi .env # edit whatever you want
task deploy.sh
```

## 4. Setup pipelines and start local development

1. Edit bitbucket-pipelines.yml (adapt path & host ip)
2. Allow the the git repo to access the docker host
3. Adapt Taskfile.yaml (remove commands we dont need)
