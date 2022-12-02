import { Component } from "@angular/core";

@Component({
    selector: 'app-warningalert',
    //templateUrl: 'warningalert.component.html',
    //styleUrls: ['warningalert.component.css']
    template: '<p>This is an Warning alert</p>',
    styles: [`p {
        padding: 5px;
        background-color: mistyrose;
        border: 1px solid red;
    }`]
})
export class WarningAlertComponent{

}