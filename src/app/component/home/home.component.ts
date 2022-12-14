import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private route: ActivatedRoute) {
    this .route.queryParams.subscribe(data=>{
      console.log(data);
    });
   }



  ngOnInit(): void {
    console.log(this.route.snapshot.params);
  }

}
