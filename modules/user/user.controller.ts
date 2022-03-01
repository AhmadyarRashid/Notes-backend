// @ts-ignore
// eslint-disable-next-line no-redeclare
import { Request, Response, NextFunction } from "express";
const winston = require('../../config/winston');

/**
 * @tags User
 */

module.exports = {
  /**
   * POST /api/v1.0/user/login
   * @summary login
   * @tags User
   * @return 200 - ok - application/json
   */
  async login(req: Request, res: Response, next: NextFunction) {
    winston.info(`Enter in login controller`);
    res.status(200).send({
      success: 1,
      response: 200,
      message: "login successfully.",
      data: {},
    });
  },
}
