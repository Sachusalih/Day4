import { Component } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent {

  constructor( private test:TestService){}
artform=this.test.givedata()


  single:any
  ngOnInit(){
    let id=Number(localStorage.getItem('id'))
    this.single=this.artform.filter(e =>e.id==id)
    console.log("name",this.single)
  }
}
