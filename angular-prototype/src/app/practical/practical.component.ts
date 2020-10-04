import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-practical',
  templateUrl: './practical.component.html',
  styleUrls: ['./practical.component.css']
})
export class PracticalComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {
    window.onscroll = () => {
      scrollFunction();
    };

    function scrollFunction() {

      const nav = document.querySelector('div.overlay') as any as HTMLElement;
      const width = nav.offsetWidth;
      if (width !== 0) {
        document.getElementById('navOverlay').style.width = '0';
      }
    }
   }

  ngOnInit() {
  }

  openDropdown(): void {
    if (document.getElementById('dropdownContent').style.opacity === '0'){
      document.getElementById('dropdownContent').style.opacity = '1';
    } else {
      document.getElementById('dropdownContent').style.opacity = '0';
    }
  }
}
