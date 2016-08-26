import {Component} from '@angular/core';
import {Message} from './message';
import {MessageService} from './message.service';

@Component({
  selector:'my-message-input',
  template: `
  <section>
    <div class="form-group">
      <label for="content">Content</label>
      <input type="text" class="form-control" id="content" #input>
    </div>
    <button type="submit" class="btn btn-default spacing" (click)="onCreate(input.value)">
    Send Message</button>
  </section>
  `,
  styles: [`
    .spacing
      {
        margin-bottom:10px
      }
      `]
})

export class MessageInputComponent{

  constructor(private _messageService : MessageService){}

  onCreate(inputValue : string){
    const message: Message = new Message(inputValue, 'Dummy');
    this._messageService.addMessage(message);
  }
}
