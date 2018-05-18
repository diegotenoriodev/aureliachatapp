import {Router, RouterConfiguration} from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  message: string;

  private router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Users';

    config.map(
      [
        {route: '', moduleId: PLATFORM.moduleName('resources/login'), title: 'Login'},
        {route: 'register', moduleId: PLATFORM.moduleName('resources/register'), name:'register', title: 'New User'},
        {route: 'login', moduleId: PLATFORM.moduleName('resources/login'), name: 'login', title: 'Login'},
      ]
    );

    this.router = router;
  }
}
