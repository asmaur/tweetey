export class Tweet{
  id: number;
  user: string;
  content: string;
  hashTags: string[];

  constructor(){
    this.id=null;
    this.user=null;
    this.content=null;
    this.hashTags = []
  }
}
