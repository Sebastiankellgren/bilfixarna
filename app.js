m = {}; 
g = {};

[
  "express",
  "express-session",
  "compression",
  "path",
  "fs",
  "serve-favicon",
  "cookie-parser",
  "body-parser",
  "crypto",
  "gulp",
  "gulp-less",
  "gulp-clean-css",
  "mongoose",
  "mysql",
  "./models/cars",
  "./models/customers",
  "./models/damages",
  "./models/employees",
  "./models/spares",
  "./models/vacations",
  "./dummyGen",
  "./settingsConstr",
  "./classLoader"
].forEach(function(x){
  // store required modules in "m"
  m[x.replace(/\W/g,'')] = require(x);
});

console.log("All loaded modules", Object.keys(m));

m.settingsConstr();

m.classLoader();

console.log("All loaded classes", Object.keys(g.classes));

//new g.classes.DB();

new g.classes.SQL();

new g.classes.LessWatch();

new g.classes.Server();


/*
  If we didnt have a class loader

  var Server = require('./classes/Server.class.js');

  new Server();
*/
