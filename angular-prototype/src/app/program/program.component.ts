import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  speakers: Array<any>;

  constructor(@Inject(DOCUMENT) private document: Document,
              private databaseService: DatabaseService
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
  }

}
