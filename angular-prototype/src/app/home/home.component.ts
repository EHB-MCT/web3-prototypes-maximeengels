import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DatabaseService } from 'src/app/database.service';
import {Howl, Howler} from 'howler';
import { faCaretLeft, faPlay, faPause, faCaretRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faCaretLeft = faCaretLeft;
  faPlay = faPlay;
  faPause = faPause;
  faCaretRight = faCaretRight;

  speakers: Array<any>;
  // sound: Const<any>;

  playAudio() {
    // Setup the new Howl.
    const sound = new Howl({
      src: ['assets/audio/sound.mp3']
    });
    console.log(sound);
    console.log("Left Click aka Play");
    const songId = sound.play();
    // Play the sound.

    if (!sound.playing(songId)){
      sound.once('load', function(){
        sound.play(songId);
      });
    }

    // Change global volume.
    Howler.volume(0.5);
  }

  muteAudio(){
    console.log("Right Click aka Stop");
    Howler.stop();
  }

  constructor(@Inject(DOCUMENT) private document: Document,
              private databaseService: DatabaseService
    ) {
    window.onscroll = () => {
      scrollFunction();
    };

    function scrollFunction() {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById('attrImgId').className = 'attrImg hide';
      } else {
        document.getElementById('attrImgId').className = 'attrImg';
      }

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
