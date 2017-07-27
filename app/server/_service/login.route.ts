
import { Router, Response, Request } from 'express';
import { IUser, UserModel } from '../_model/index';
import { authorization } from '../_common/index';

export const login = Router();

login.post('/login', authorization({

  global: { mustBeLogged: false }

}),(request: Request, response: Response) => {

  UserModel.findOne({
    $and: [{
      username: { $exists: true }
    },{
      email: { $exists: true }
    },{
      $or: [{
        email: request.body.login
      },{
        username: request.body.login
      }]
    },{
      password: request.body.password
    }],
  }, (error: any, user: IUser) => {

    if (error)
      return response.handler({ DBError: true, error: error });

    if (user)
      response.handler({ type: true, data: { token: user.token } });
    else
      response.handler({ type: false });

  });

});
