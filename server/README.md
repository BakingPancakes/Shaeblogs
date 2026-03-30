# ExpressJS server for Controller module (MVC)

For new users, `npx tsc && node ./dist/main.js` must be run every time changes are made to server files. To mitigate this dev overhead, this server uses _nodemon_ package to automatically re-interpret and run the node process when changes are detected.

# Commands

## Start the dev server:

```bash
npm run dev
```

## Create + control pm2 job

Start server:

```sh
npm run start
```

Stop Server:

```sh
npm run stop
```

List all server instances:

```sh
npm run list
```

Further debugging with pm2 jobs can be done by calling the pm2 package directly.

# TODO:

- deal with high severity vulnerabilities in npm
- consider installing a logger like journalctl or winston
- update prisma maybe
- improve error checking in main.ts such that whole server doesn't get shut down
