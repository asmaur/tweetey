import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tweet } from '../modules/model/tweet';
import { randEmail, randFullName, randPhrase, incrementalNumber } from '@ngneat/falso';
import { MessageService } from 'primeng/api';
import * as _ from 'lodash'

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  HashTags: string[] =[]
  tweetList:Tweet[] = []

  constructor(
    private messageService: MessageService,
  ) { }

  getHashtags(){

  }

  generateTweets(){
    if(this.HashTags.length>0){
    this.tweetList = []
    for(let i=8; i>0; i--){
      const tweet = new Tweet()
      tweet.id = Math.floor(Math.random() * 1000) + 1;
      tweet.user = randFullName();
      tweet.content = randPhrase();
      tweet.hashTags = _.sampleSize(this.HashTags, 3)
      this.tweetList = [...this.tweetList, tweet]
    }
  }else{
    this.messageService.add(
      {key:'info', severity:'error', summary:'Sem HashTag', detail:'Nenhum hashtag encontrado favor definir alguns.'}
    )
  }
  }

  loadTweets():Observable<Tweet[]>{
    this.generateTweets();
    return of(this.tweetList);
  }


}
