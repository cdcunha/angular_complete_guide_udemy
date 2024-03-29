import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    //Geting data from the Resolver
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'] //The name defined in resolve property on app-routing
      }
    );
    //Instead to get data here, we're using Resolver 
    // const id = +this.route.snapshot.params['id']; //Use + to cast string to number
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);  //Use + to cast string to number
    //   }
    // );
  }

  onEdit(){
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
