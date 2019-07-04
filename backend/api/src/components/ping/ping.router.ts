import { TRouter } from '@appt/api';
import { Get } from '@appt/api/router';
import { Component } from '@appt/core';
import * as httpStatus from 'http-status';

import { PingController } from './ping.controller';

@Component({
  extend: TRouter('/'),
  inject: PingController
})
export class PingRouter {
  constructor(private readonly controller: PingController) {}

  @Get('/')
  public ping(request, response) {
    this.controller
    .ping()
    .then(data => response.send(data))
    .catch(error => response.send(error, httpStatus[400]));
  }
}
