import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-menu-aside',
  styleUrls: ['./menu-aside.component.css'],
  templateUrl: './menu-aside.component.html'
})
export class MenuAsideComponent implements OnInit {
  private currentUrl: string;
  private links: Array<any> = [
    {
      'title': 'Dashboard',
      'icon': 'dashboard',
      'link': ['/']
    },
    {
      'title': 'Calendar',
      'icon': 'calendar',
      'link': ['/calendar']
    }
  ];

  constructor(private userServ: UserService, public router: Router, private auth: AuthService) {
    // getting the current url
    this.router.events.subscribe((evt) => this.currentUrl = evt.url);
  }

  public ngOnInit() {
    // TODO
  }

}
