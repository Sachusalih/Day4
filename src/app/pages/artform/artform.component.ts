import { Component } from '@angular/core';
import { TestService } from 'src/app/test.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-artform',
  templateUrl: './artform.component.html',
  styleUrls: ['./artform.component.css']
})
export class ArtformComponent {
  
  constructor(private router:Router,private test:TestService){}

  artform=this.test.givedata()

gotohere(id:any){
  localStorage.setItem('id',id)
  this.router.navigate(['/single'])
}

}
