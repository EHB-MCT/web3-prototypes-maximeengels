import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DatabaseService } from 'src/app/database.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {
  id: number;
  speakers: Array<any>;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private databaseService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    window.onscroll = () => {
      scrollFunction();
   };

    function scrollFunction() {

    const nav = document.querySelector('div.overlay') as any as HTMLElement;
    const width = nav.offsetWidth;
    if (width !== 0){
      document.getElementById('navOverlay').style.width = '0';
      }
    }
  }

  ngOnInit() {
    this.databaseService.getSpeakers()
    .then(result => {
      this.speakers = result;
      console.log(result);
    });
    this.route.params.subscribe( params => {
      this.id = params.id;
    });
  }

  goBack() {
    window.history.back();
  }

}
