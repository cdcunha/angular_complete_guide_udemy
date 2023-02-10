import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuardService } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolverService } from './servers/server/server-resolver.service';

const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }, //dynamic part of path
  ] },
  { path: 'servers', 
    //canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService], 
    component: ServersComponent, 
    children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServerResolverService} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService] },
    ] 
  },
  //{ path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: 'not-found' } //Catch any other path. NOTE: Needs to be the last path on the routes
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //RouterModule.forRoot(appRoutes, { useHash: true }), //useHash add # after the server address and tells the webserver to taker care only with the domain
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
