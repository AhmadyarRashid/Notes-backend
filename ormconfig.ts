module.exports = {
  "type": "mysql",
  "host": "local.cdlwngsvahce.us-west-1.rds.amazonaws.com",
  "port": 3306,
  "username": "master",
  "password": "master123",
  "database": "test",
  "entities": [
    "./node_modules/execfn-core/lib/data/entities/**/*.js"
  ],
  "migrations": [
    "./node_modules/execfn-core/lib/data/migrations/*.js"
  ],
  "synchronize": false,
  "migrationsTableName": "migrations",
  "cli": {
    "migrationsDir": "./src/data/migrations/"
  }
}
