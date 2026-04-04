# Website for Shaelyn's blogs about cafes, fads, and her cat Parker (dootie)

Currently in progress... Is expected to serve articles created by Shaebae discussing her different realms of interest such as cafes, parks, photography...

## Development considerations

Given that the server automatically pulls from any new builds, it's advised to save to github (create a backup) before running npm run build.

I think the only reason I used npm init in the root directory was so I could use eslint??

## Dev Todos

- Configure prettier + figure out how it works
- Set up Lucia Auths
- set up huksy + lint-staged to block un-linted commits
- date is created on client side when shaebae submits an article

## UI Todos

- Create a template for each page
- figure out how to make side-bar appear once moving from home page
- figure out how to request and store images (for article thumbnails)
- add 404 page
- update Page schema to include friends + eats, remove sights
- update article schema to include comments
- cache any recently loaded articles to the browser + load them if possible (set a threshold of course)

# Project Setup

## Install Node packages

```sh
cd server && npm i

cd ../

cd client && npm i
```

## Generate prisma schemas + types

Prisma schema files are populated in a root folder under shared/generate/prisma

```sh
cd server && npx prisma generate
```

## Run dev servers

The following will start the Vite server in client/ and the Express.js server in server/ using nodemon for hot-updates.

```sh
npm run dev
```

## Create build

The following will create the build files in either client/ or server/. Don't forget to run npx prisma generate in the server folder for prisma schema build files.

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Vue notes

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.
