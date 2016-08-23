import {Component} from "@angular/core";
import {Message} from "./message";

@Component({
  selector: 'my-message',
  template: `
  <article class="panel panel-default">
    <div class="panel-body">{{message.content}}</div>
    <footer class="panel-footer">
      <div class="author ">{{message.author}}</div>
      <div class="config">
        <a href="#">Edit</a>
        <a href="#">Delete</a>
      </div>
      <div class="ramu"></div>
    </footer>
  </article>
  `
})
export class MessageComponent{
  message: Message = new Message('The content', null, 'Max');
}
