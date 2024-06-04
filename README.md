## Tech and Tools Used in Project

1. Next JS
2. TailwindCSS
3. Typescript
4. MongoDB (Database)
5. Mongoose (library)
6. Github (repository)
7. Vercel (hosting)

## How to Run Locally

1.  Clone github repo or download ZIP and extract it
2.  Navigate to project dir and open terminal in the folder project
3.  Install all dependency with "npm i" or "npm install" command for npm
4.  Run the app locally with "npm run dev" or "npm start" command
5.  got to "http://localhost:3000" to open the local host or link that provided in the terminal

## NOTES

1. To edit existing list. Select a list from the left card, type new value in the right card then click Edit.
2. The mongoDB is set to allow access from any ip addresses, so no need to register new ip address first.
3. The app is registered as user123 in mongoDB, a custom user that can only READ or WRITE data to certain cluster.
4. To check the user_uri info, go to mongoose.ts in lib folder. There you can see the user username, password, cluster, and database access

## TODO

1. Create draggable and sortable list