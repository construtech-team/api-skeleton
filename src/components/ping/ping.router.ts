import { Component } from '@appt/core';
import { TRouter } from '@appt/api';
import { Get } from '@appt/api/router';

import * as httpStatus from 'http-status';

import { PingController } from './ping.controller';

@Component({
  extend: TRouter('/'),
  inject: PingController,
})
export class PingRouter {
  constructor(private controller: PingController) {}

  @Get('/')
  ping(request, response) {
    this.controller
    .ping()
    .then(data => response.send(data))
    .catch(error => response.send(error, httpStatus[400]));
  }
}