import { Module } from '@appt/core';

import { PingController } from './ping.controller';
import { PingRouter } from './ping.router';

@Module({
  declare: [PingController, PingRouter],
})
export class PingModule {}
