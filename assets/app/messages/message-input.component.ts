import {Component} from '@angular/core';
import {Message} from './message';
import {MessageService} from './message.service';

@Component({
  selector:'my-message-input',
  template: `
  <section>
  <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
    <div class="form-group">
      <label for="content">Content</label>
      <input ngControl="content" type="text" class="form-control" id="content" #input>
    </div>
    <button type="submit" class="btn btn-default spacing">
    Send Message</button>
    </form>
  </section>
  `,
  styles: [`
    .spacing
      {
        margin-bottom:10px;
      }
      `]
})

export class MessageInputComponent{

  constructor(private _messageService : MessageService){}
  onSubmit(form:any){
    const message: Message = new Message(form.content, 'Dummy');
    this._messageService.addMessage(message);
  }
}
