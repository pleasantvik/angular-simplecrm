import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'simpleCRM';

  page_heading = 'Welcome to ARC Tutorial';
  page_count = 10;
  user_obj = {
    firstName: 'Adedayo',
    lastName: 'Ayoola',
    sex: 'Male',
  };

  isUserLoggedIn = true;
  success_msg = true;
  success_flag = true;
  superPower = 'wonderWoman';
  c3 = 'c3';
  condition = 'c4';
  imgUrl = 'test.png';
  imgAlt = 'no image';
  number = 'number';

  contacts = [
    { firstname: 'Cristaiano', lastName: 'Ronaldo', contactId: 123 },
    { firstname: 'Wayne', lastName: 'Rooney', contactId: 1234 },
    { firstname: 'Dimitri', lastName: 'Berbatove', contactId: 12345 },
  ];
}
