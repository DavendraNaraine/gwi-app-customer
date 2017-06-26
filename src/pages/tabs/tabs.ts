import { Component } from '@angular/core';

import { SignUpPage } from '../sign-up/sign-up';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LoginPage;
  tab3Root = SignUpPage;

  constructor() {

  }
}
