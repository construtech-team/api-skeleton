import { TRouter } from '@appt/api';
import { Component } from '@appt/core';

@Component({
  extend: TRouter('/v1'),
})
export class MainRouter {}
