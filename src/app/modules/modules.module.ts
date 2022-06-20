import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PrimeModule } from '../prime/prime.module';
import { MessageService } from 'primeng/api';
import { TweetComponent } from './components/tweet/tweet.component';



@NgModule({
  declarations: [
    TweetComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,

  ],
  exports:[
    TweetComponent,
  ],
  providers: [MessageService]
})
export class ModulesModule { }
