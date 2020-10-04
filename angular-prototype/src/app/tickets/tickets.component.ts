import { element } from 'protractor';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  counter0 = 0;
  counter1 = 0;
  counter2 = 0;

  totalCounter = 0;

  price0 = 45;
  price1 = 90;
  price2 = 250;

  discount = '';
  totalNoDisc = 0;
  total = 0;

  tickets: Array<any>;

  constructor(@Inject(DOCUMENT) private document: Document,
              private databaseService: DatabaseService
    ) {
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
    this.databaseService.getTickets()
    .then(result => {
      this.tickets = result;
      console.log(result);
    });
  }

  deleteCount(event: any){
    if (this.counter0 !== 0){
      if (event.currentTarget.id === 'early'){
        this.counter0 -= 1;
      }
    }
    if (this.counter1 !== 0){
      if (event.currentTarget.id === 'standard'){
        this.counter1 -= 1;
      }
    }
    if (this.counter2 !== 0){
      if (event.currentTarget.id === 'all'){
        this.counter2 -= 1;
      }
    }
  }

  updateCount(event: any) {
    if (event.currentTarget.id === 'early'){
      this.counter0 += 1;
    }
    if (event.currentTarget.id === 'standard'){
      this.counter1 += 1;
    }
    if (event.currentTarget.id === 'all'){
      this.counter2 += 1;
    }
  }

  getCount(i){
    if (i === 0){
      return this.counter0;
    } else if (i === 1) {
      return this.counter1;
    } else if (i === 2) {
      return this.counter2;
    }
  }

  getTotalNoDisc(){
    return this.totalNoDisc = (this.price0 * this.counter0) + (this.price1 * this.counter1) + (this.price2 * this.counter2);
  }

  getTotal(){
    this.totalCounter = this.counter0 + this.counter1 + this.counter2;
    if (this.totalCounter >= 6){
      return this.totalNoDisc * 0.9;
    } else {
      return this.getTotalNoDisc();
    }
  }

  showDiscount(){
    if (this.totalCounter >= 6){
      return this.discount = '-10%';
    }
  }

}
