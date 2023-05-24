# Tugas-Sequelize-CRUD

Status pengerjaan : Finished / Completed

# how to start project

1. clone this repo
   `git clone`
2. delete file `pnpm-lock.yaml`
3. install all package
   `npm install ` or `yarn install`
4. start your php myadmin
5. running project
   `npm run start` or `yarn start`

# List of unique library

1. express-async-handler
2. nodemon

# list of endpoint

1. Host : localhost:3500
2. /api/biodata GET : for retreive all biodata on database
3. /api/biodata POST : for create new biodata
4. /api/biodata PATCH : for update biodata
5. /api/biodata/:id GET : for retrive single biodata with id biodatadata as params
6. /api/biodata/:id DELETE : for delete single biodata with id as params

# some notes

1. if not using phpMyadmin or having trouble while connect to db try to costumize db configuration at root/config/db.config.js
