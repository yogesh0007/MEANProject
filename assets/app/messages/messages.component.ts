import {Component} from '@angular/core';
import {MessageListComponent} from './message-list.component';
import {MessageInputComponent} from './message-input.component';

@Component({
  selector: 'my-messages',
  template: `
        <div class="row">
          <section class="col-md-8 col-md-offset-2">
            <my-message-input></my-message-input>
          </section>Hello
        </div>
        <div class="row">
            <my-message-list></my-message-list>
        </div>
  `,
  directives: [MessageListComponent, MessageInputComponent]
})
export class MessagesComponent{}
