import { Component } from '@appt/core';

@Component({})
export class PingController {
   async ping() {
    return {
      online: true,
      date: Date.now(),
    };
  }
}
