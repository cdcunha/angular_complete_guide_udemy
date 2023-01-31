import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];
  
  //Biding Custom events
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  //Biding Custom events
  onBlueprintAdded(bluepringData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluepringData.serverName,
      content: bluepringData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst(){
    console.log('Deleting element');
    console.log(this.serverElements);
    this.serverElements.splice(0, 1);
    console.log(this.serverElements);
    console.log('Element deleted');
  }
}
