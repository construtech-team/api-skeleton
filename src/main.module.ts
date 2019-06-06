import { Module } from '@appt/core';
import { TServer } from '@appt/api';

import { server } from '@appt/core/config';

@Module({
   extend: TServer(server.port)
})
export class MainModule {
   constructor() {
      console.info(`Server running at [::]${server.port}`);
   }
}