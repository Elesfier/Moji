
import { Response, Request } from 'express';
import { IUser, UserModel } from '../_model/index';
import * as jwt from 'jsonwebtoken';
import { gets } from './gets/index';

let config = require('../../../Moji.config')();

export const JWT_TOKEN_SECRET: string = process.env.MOJI_JWT_TOKEN_SECRET
                            || config.jwt_token_secret;

function preAuthorization (request: Request, response: Response, next: any)
{
  const global = this.global || {};
  if (global.allowed === false)
  {
    return response.handler({ status: 403, type: 'NOT_ALLOWED' });
  }
  if (global.mustBeLogged === true || global.mustBeLogged === undefined)
  {
    const token = request.get("Authorization") || request.query.token;
    if (typeof token !== 'undefined')
    {
      jwt.verify(token, JWT_TOKEN_SECRET, (error: any, decoded: any) => {
        if (error || (!decoded) || (!decoded._id))
          return response.handler({ status: 403, type: 'WRONG_TOKEN' });
        UserModel.findById(decoded._id, (error: any, user: IUser)=> {

          if (error)
            return response.handler({ DBError: true, error: error });

          request['_currentUser'] = user;

          if (this.get && this.get.length !== 0)
          {
            request['_get'] = {};

            this.get.forEach((getOption: string, index: number) => {
                gets[getOption](request,() => {
                  if (index === this.get.length - 1) next();
                });
            });
          }
          next();

        });
      });
    }
    else
    {
      response.handler({ status: 403, type: 'NO_TOKEN' });
    }
  }
  else
  {
    next();
  }
}

//[FIXME]: this function should always return Function(request..) not any
export function authorization (params: any): any
{
  return (preAuthorization.bind(params));
}
