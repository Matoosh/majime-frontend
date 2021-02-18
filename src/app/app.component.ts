import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'majime';
  items;
  constructor(private sidebarService: NbSidebarService){
    this.items = [
      {
        title: 'Home',
        icon: 'home-outline',
        link: '/home',
        home: true
      },
      {
        title: 'Sample',
        icon: 'flag-outline',
        link: '/samples'
      },
      {
        title: 'Laboratory',
        icon: 'list-outline',
        link: '/laboratory'
      }
    ]
  }

  toggle() {
    this.sidebarService.toggle(true, 'menu');
  }
}
