import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server!: { id: number, name: string, status: string } | undefined;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const serverID = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(serverID);

    this.route.params.subscribe((_params: Params) => {
      this.server = this.serversService.getServer(+_params['id']);
    });
  }

  onEditServer() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      // preserve to preserve the old queryParams and merge to merge with new queryParams
      queryParamsHandling: 'preserve'
    });
  }

}
