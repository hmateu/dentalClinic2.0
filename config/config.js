const config = {
  "development": {
    "username": process.env.DEV_DDBB_USERNAME,
    "password": process.env.DEV_DDBB_PASSWORD,
    "database": process.env.DEV_DDBB_NAME,
    "host": process.env.DEV_DDBB_HOST,
    "dialect": process.env.DEV_DDBB_DIALECT,
    "port": process.env.DEV_DDBB_PORT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
module.exports = config;