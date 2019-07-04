import { Module } from '@appt/core';

import { PersistenceConnection } from './persistence.connection';

@Module({
  declare: [PersistenceConnection],
})
export class PersistenceModule {}
