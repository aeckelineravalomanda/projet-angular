import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  appareils = [
    {
      name : 'Machine à laver',
      status: 'Eteint'
    },
    {
      name : 'Télévision',
      status : 'Allumé'
    },
    {
      name : 'Lave vaiselle',
      status: 'Eteint'

    }
  ]

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    console.log('on allume tout');
  }
}
