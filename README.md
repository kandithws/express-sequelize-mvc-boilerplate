## Basic run command
Goto the root of directory then

`$ npm install`

For db other than sqlite3 (i.e. postgres, mysql)

`$ npm run sequelize -- db:create`

Then 

`$ npm run sequelize -- db:migrate`

To run the site 

`$ npm run dev` or `$ npm start`

It should be appeared on http://localhost:3000/



## Configure to use with sqlite3
In ".sequelizerc"
change From:

`'config': path.resolve('config', 'config.json') `

TO:

`'config': path.resolve('config', 'config_sqlite3.json')`

## Related details for this example
[expressjs](https://expressjs.com/): Backend server

[ejs](http://ejs.co/): Embedded Javascript -- Template view rendering engine

[passportjs](http://www.passportjs.org/): Authentication Middleware

[Sequelize](http://docs.sequelizejs.com/) : Object-Relational Mapping for SQL database 

[Sequelize-cli](https://github.com/sequelize/cli): commandline tools for sequelize  

