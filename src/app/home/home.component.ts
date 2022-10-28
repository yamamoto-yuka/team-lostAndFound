import { Component, OnInit } from '@angular/core';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts:any = [];
  showInfo:boolean = false;
  hidden:boolean=true;
  status="none";
  public isCollapsed: boolean[] = [];

  constructor(private http:CommonService) { }

  getInfo( contactInfo:any) {
    // Do logic here
    // console.log("contact info is " , contactInfo)
    if(contactInfo.style.display == "none"){
      contactInfo.style.display = "block"; // example: "#f00"
    }else{
      contactInfo.style.display = "none";
    }
  }

  getDescription(description:any){
    if(description.style.display == "none"){
      description.style.display = "block"; // example: "#f00"
    }else{
      description.style.display = "none";
    }
  }

  closeItem(listcontainer:any, id:number, close:boolean){
    if(listcontainer.style.display == "none"){
      listcontainer.style.display = "block"; // example: "#f00"
    }else{
      listcontainer.style.display = "none";
    }
    close = !close;
    this.http.update(id).subscribe(res=>{
      // let closeBody={
      //   "data":{
      //     "Close":!close
      //   }
      // }
      console.log("res is ", res);
    })
  }

  ngOnInit(): void {
    this.http.getAllposts().subscribe(posts =>{
      this.posts = posts;
      console.log(this.posts)
   })
  }

  // json:LostItem[]=[ {"data":{id:1,
  //   attributes:{
  //     Title:"title1",
  //     Location:"Vancvouver",
  //     Claim:false,
  //     Found:false,
  //     LostOrFound:"found",
  //     Email:"email",
  //     Phonenumber:"12345",
  //     Description:"Description",
  //     Image:"image",
  //     Date_found:"Date",
  //   Claim_name: "Claim",
  //   }
  //   }
  // }
  // ]

  // getInfo(button:any){
  //     // this.showInfo = !this.showInfo;
  //     console.log(button);

  //     // this.hidden = !this.hidden;
  // }

  //   getInfo(button: HTMLButtonElement, contactInfo:any) {
  //     // Do logic here
  //     // button.style.backgroundColor = desiredColor;
  //     this.showInfo = !this.showInfo;
  //     console.log(button);
  //     console.log(contactInfo);


  //     // this.showInfo = !this.showInfo;
  // }



}


