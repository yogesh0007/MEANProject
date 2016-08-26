import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Message} from "./message";
import {MessageService} from "./message.service";

@Component({
  selector: 'my-message',
  template: `
  <article class="panel panel-default" [ngStyle] = "{'background-color' : color}"
  (mouseenter) = "color = 'red'" (mouseleave) = "color = 'white'">
    <div class="panel-body">{{message.content}}</div>
    <footer class="panel-footer">
      <div class="author ">{{message.author}}</div>
      <div class="config">
        <a href="#" (click)="onEdit()">Edit</a>
        <a href="#" (click)="onDelete()">Delete</a>
      </div>
      <div class="ramu"></div>
    </footer>
  </article>
  `
})
export class MessageComponent{
  @Input() message: Message;
  @Output() editClicked = new EventEmitter<string>();
  color = 'white';

  constructor(private _messageService: MessageService){}

  onEdit(){
    this._messageService.editMessage(this.message);
  }

  onDelete(){

  }
}
