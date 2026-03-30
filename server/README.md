# ExpressJS server for Controller module (MVC)

For new users, `npx tsc && node ./dist/main.js` must be run every time changes are made to server files. To mitigate this dev overhead, this server uses _nodemon_ package to automatically re-interpret and run the node process when changes are detected.

Start the server:

```bash
npm run dev
```

# TODO:

- deal with high severity vulnerabilities in npm
- consider installing a logger like journalctl or winston
- update prisma maybe
- improve error checking in main.ts such that whole server doesn't get shut down
