const userController = require('./user.controller');
// @ts-ignore
const resource = "/user";

module.exports = function (app:any, version:string) {
  app.post(
    `${version}${resource}/login`,
    userController.login,
  );
}
