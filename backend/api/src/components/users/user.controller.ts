import { Component } from '@appt/core';
import * as bcrypt from 'bcryptjs';

import { User } from './user.model';

@Component({
  inject: User
})
export class UserController {
  constructor(private user: any) {}

  public signup(user: any) {
    return bcrypt.hash(user.password, 10)
      .then(hash => this.user.create(Object.assign(user, { password: hash })));
  }
}
