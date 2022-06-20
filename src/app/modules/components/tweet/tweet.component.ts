import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tweet } from '../../model/tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() tweet:Tweet;
  @Output() exibirTweetEvent = new EventEmitter()
  @Output() removerTweetEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  emitExibirTweetEvent(tweet:Tweet){
    this.exibirTweetEvent.emit(tweet);
  }

  emitRemoverTweetEvent(tweet:Tweet){
    this.removerTweetEvent.emit(tweet);
  }

}
