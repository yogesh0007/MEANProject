import {Component, OnInit} from '@angular/core';
import {MessageComponent} from './message.component';
import {Message} from './message';
import {MessageService} from './message.service';

@Component({
    selector : 'my-message-list',
    template: `
    <section class="col-md-8 col-md-offset-2">
      <my-message *ngFor="let message of messages" [message] = message
      (editClicked) = "message.content = $event"></my-message>
    </section>
    `,
    styles: [`
        .author{
          float: left;
        }
        .config{
          float:right;
        }
        .ramu{
          clear: both;
        }
      `],
    directives: [MessageComponent]
})

export class MessageListComponent implements OnInit{

  constructor(private _messageService: MessageService){}
  messages: Message[];

  ngOnInit(){
      //this.messages: Message[] = [new Message('New Message', 'Yogesh'),
      //                    new Message('Another message', 'Yashu')
      //                  ];
      this.messages = this._messageService.getMessage();
      console.log(this.messages);
  }

}
