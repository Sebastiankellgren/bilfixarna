'use strict';

module.exports = class mySQL {
  constructor() {
    this.settings = g.settings.mySQL;
    this.mySql = new g.classes.mySQL();
    this.app = express;

    this.router();
  }

  router() {
  }

  connect() {
    this.connection = this.mySql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'Bilar'
    });

    this.connection.connect((err) => {
      if (!err) {
        console.log("Connected!");
        return;
      }
      console.log("Error connecting database", err);
    });
  }
};