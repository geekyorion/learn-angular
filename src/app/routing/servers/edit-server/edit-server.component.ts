import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server!: { id: number, name: string, status: string } | undefined;
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // // we can use snapshot
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);

    // // or we can also subscribe
    // this.route.queryParams.subscribe();
    // this.route.fragment.subscribe();

    const serverID = +this.route.snapshot.params['id'];
    this.allowEdit = this.route.snapshot.queryParams['allowEdit'] === '1';
    this.server = this.serversService.getServer(serverID);
    this.serverName = this.server?.name || '';
    this.serverStatus = this.server?.status || '';
  }

  onUpdateServer() {
    if (this.server) {
      this.serversService.updateServer(this.server?.id, { name: this.serverName, status: this.serverStatus });
    }
  }

}
