// @ts-ignore
// eslint-disable-next-line no-redeclare
import { Request, Response, NextFunction } from "express";
const winston = require('../../config/winston');

/**
 * @tags Notes
 */

module.exports = {
  /**
   * GET /api/v1.0/notes
   * @summary Get all User Notes
   * @tags Notes
   * @return 200 - ok - application/json
   */
  async notes(req: Request, res: Response, next: NextFunction) {
    winston.info(`Enter in notes controller`);
    res.status(200).send({
      success: 1,
      response: 200,
      message: "Return notes.",
      data: {},
    });
  },
}
