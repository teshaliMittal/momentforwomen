import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss']
})
export class TopicListComponent implements OnInit {

  topic: string;
  subscriptionParam: any;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscriptionParam = this.route.params.subscribe(params=>{
      this.topic = params['topic'];
    })
  }

}
