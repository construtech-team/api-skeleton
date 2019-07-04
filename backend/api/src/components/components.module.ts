import { Module } from '@appt/core';

import { PingModule } from './ping/ping.module';

@Module({
    declare: [PingModule]
})
export class ComponentsModule {}
