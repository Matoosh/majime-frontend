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
        title: 'zgłoszenie próby',
        icon: 'list-outline',
        link: '/batch_notification'
      },
      {
        title: 'pobór próby',
        icon: 'list-outline',
        link: '/batch_collection'
      },
      {
        title: 'przyjęcie próby',
        icon: 'list-outline',
        link: '/batch_adoption'
      },
      {
        title: 'przydzielanie badań',
        icon: 'list-outline',
        link: '/assigning_research'
      },
      {
        title: 'wpisywanie wyników',
        icon: 'list-outline',
        link: '/enter_results'
      },
      {
        title: 'wynik poza specyfikacją',
        icon: 'list-outline',
        link: '/out_of_specification'
      },
      {
        title: 'sprawdzanie wyniku',
        icon: 'list-outline',
        link: '/checking_results'
      },
      {
        title: 'zatwierdzanie certyfikatu',
        icon: 'list-outline',
        link: '/certificate_approval'
      },
      {
        title: 'wydruk certyfikatu',
        icon: 'list-outline',
        link: '/certificate_print'
      },
      {
        title: 'raporty',
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
