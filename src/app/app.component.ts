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
  success_msg = true;
  success_flag = true;
  superPower = 'wonderWoman';
  c3 = 'c3';
  condition = 'c4';

  contacts = [
    { firstname: 'ABC', lastName: 'DEF', contactId: 123 },
    { firstname: 'CAB', lastName: 'JED', contactId: 1234 },
    { firstname: 'BAC', lastName: 'FAD', contactId: 12345 },
  ];
}
