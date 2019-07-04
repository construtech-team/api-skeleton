import { Module } from '@appt/core';
import { TServer } from '@appt/api';
import { server } from '@appt/core/config';

import { PersistenceModule } from './persistence/persistence.module';

@Module({
  extend: TServer(server.port),
  import: [PersistenceModule],
})
export class MainModule {
  constructor() {
    console.info(`Server running at [::]${server.port}`);
  }
}
