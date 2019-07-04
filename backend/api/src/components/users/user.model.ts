import { Component } from '@appt/core';
import { TModel } from '@appt/mongoose';

@Component({
  extend: TModel('UserSchema')
})
export class User {}
