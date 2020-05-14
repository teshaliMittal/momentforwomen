import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ArticlesService} from '../../../services/Articles/articles.service';
@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  topic: string;
  subscriptionParam: any;
  articles:any;
  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.subscriptionParam = this.route.params.subscribe(params=>{
      this.topic = params['topic'];
    })
  }
  getRandomColor(){
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  getArticles(){
  this.articlesService.getArticles(this.topic).subscribe(response=>{
    this.articles=response;
    
  })
  }

}
