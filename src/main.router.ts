import { Component } from '@appt/core';
import { TRouter } from '@appt/api';

@Component({
    extend: TRouter('/v1')
})
export class MainRouter {}