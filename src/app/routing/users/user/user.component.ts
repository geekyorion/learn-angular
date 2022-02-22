import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  user!: { id: number, name: string };
  paramsSubscription: Subscription | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    /**
     * whenver params changes then change is fired from observer
     */
    this.paramsSubscription = this.route.params.subscribe((_params: Params) => {
      this.user.id = _params['id'];
      this.user.name = _params['name'];
    });
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }

}
