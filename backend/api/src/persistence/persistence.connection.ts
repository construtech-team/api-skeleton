import { Component, TDatabase } from '@appt/core';
import { Mongoose } from '@appt/mongoose';
import { database } from '@appt/core/config';

@Component({
  extend: TDatabase(Mongoose, database.uri, database.options),
})
export class PersistenceConnection {}
