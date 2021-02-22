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
      },
      {
        title: 'Batch notification',
        icon: 'list-outline',
        link: '/batch_notification'
      },
      {
        title: 'Batch collection',
        icon: 'list-outline',
        link: '/batch_collection'
      },
      {
        title: 'Batch adoption',
        icon: 'list-outline',
        link: '/batch_adoption'
      },
      {
        title: 'assigning research',
        icon: 'list-outline',
        link: '/assigning_research'
      },
      {
        title: 'enter results',
        icon: 'list-outline',
        link: '/enter_results'
      },
      {
        title: 'result out of specification ',
        icon: 'list-outline',
        link: '/out_of_specification'
      },
      {
        title: 'checking results',
        icon: 'list-outline',
        link: '/checking_results'
      },
      {
        title: 'certificate approval',
        icon: 'list-outline',
        link: '/certificate_approval'
      },
      {
        title: 'certificate print',
        icon: 'list-outline',
        link: '/certificate_print'
      },
      {
        title: 'reports',
        icon: 'list-outline',
        link: '/reports'
      }
    ];
  }

  // tslint:disable-next-line:typedef
  toggle() {
    this.sidebarService.toggle(true, 'menu');
  }
}
