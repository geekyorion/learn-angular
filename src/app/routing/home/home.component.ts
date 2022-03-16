import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteSectionAuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authService: RouteSectionAuthService) { }

  ngOnInit(): void { }

  onLoadServers() {
    this.router.navigate(['/servers']);

    // we can also pass query string and fragment using navigate method
    // here 1 is server id
    // this.router.navigate(['/servers', 1, 'edit'], { queryParams: { allowEdit: 1}, fragment: 'loading' });
  }

  // navigate doesn't track the absolute path so if we pass 'users' in users component
  // then it won't throw error, to let it know, we pass the current ActivatedRoute as an option
  // so that routing can be done relatively to the current activated route
  onLoadUsers() {
    this.router.navigate(['users'], { relativeTo: this.route });
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

}
