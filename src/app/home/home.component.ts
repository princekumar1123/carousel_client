import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items: string[] = ["../assets/prince_logo.jpg", "../assets/prince_logo.jpg", "../assets/prince_logo.jpg"];
  currentIndex: number = 0;

  prev() {
    this.currentIndex = (this.currentIndex === 0) ? this.items.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex === this.items.length - 1) ? 0 : this.currentIndex + 1;
  }
}
