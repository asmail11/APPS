import { Component } from '@angular/core';

function log(target, name, descriptor){
  console.log(target, name, descriptor);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro';

  @log
  aSimpleMethod(){
    console.log("Hey There")
  }
}
