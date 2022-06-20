import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';
import { TweetService } from 'src/app/core/tweet.service';
import { Tweet } from '../../model/tweet';
import * as _ from 'lodash'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private tweetService: TweetService
  ) { }

  items: MenuItem[] =[];
  displayTag: boolean = false;
  displaySetting: boolean = false;
  hashtag: string = ''
  hashtags: string[] = [];
  selectedHashtags: string[] = [];
  newTweets:Tweet[] =[];

    ngOnInit() {
        this.items = [
          {
            label: 'Home'
          },
            {
                label: 'Settings',
                icon: 'pi pi-cog',
                command: () => this.showSettingDialog()
            },

        ];
    }


showSettingDialog() {
  this.displaySetting = true;
}


loadTweets(){
  this.tweetService.loadTweets().subscribe(response=>{
    this.newTweets = []
    if(this.selectedHashtags.length >0){
    response.forEach(item=> {

      if(item.hashTags.some(element=>this.selectedHashtags.includes(element))){this.newTweets=[...this.newTweets, item]}
    })
    }else if(response.length >0){
      this.messageService.add(
        {key:'info', severity:'warn', summary:'Sem HashTag', detail:'Nenhum hashtag filtro encontrado. mostrando todos os tweets.'}
      )
      this.newTweets = response;
    }
  })
}

onClearSelected(){
  this.selectedHashtags = []
}

onClearCreated(){
  this.tweetService.HashTags = []
}

onChipClick(value:any){
  this.selectedHashtags = [...this.selectedHashtags, value]
}

//onRemove(){}
//onAdd(){}

salvarHastags(){
  this.displaySetting = false;
  this.tweetService.HashTags = this.hashtags;
}

exibirTweet(tweet){
  this.messageService.add({severity:'custom', summary:tweet.user, detail:tweet.content, icon:"pi-user"});
  this.newTweets = this.newTweets.filter(item => item.id !=tweet.id)
}

removerTweet(tweet){
  this.newTweets = this.newTweets.filter(item => item.id !=tweet.id)
}


}

