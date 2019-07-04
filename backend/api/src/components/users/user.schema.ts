import { Component } from '@appt/core';
import { SchemaProperties, TSchema } from '@appt/mongoose';

@Component({
  extend: TSchema,
  inject: SchemaProperties,
})
export class UserSchema {
  private realm: string;
  private username: string;
  private email: string;
  private password: string;
  private emailVerified: boolean;
  private dashboard: string;

  constructor({
    asString,
    asBoolean,
  }) {
    this.realm = asString();
    this.username = asString();
    this.email = asString();
    this.password = asString();
    this.emailVerified = asBoolean();
    this.dashboard = asString();
  }
}
