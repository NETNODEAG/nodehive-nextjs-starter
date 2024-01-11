FROM node:18-alpine

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk update
RUN apk add libc6-compat

WORKDIR /app

# Install dependencies based on the preferred package manager

# Install dependencies
COPY package*.json ./
#RUN npm ci
RUN npm i

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build



EXPOSE 3000

ENV PORT 3000



#EXPOSE 3000
#ENV PORT 3000

CMD ["npm", "run", "start"]
