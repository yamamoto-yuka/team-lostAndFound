import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-lost-edit',
  templateUrl: './lost-edit.component.html',
  styleUrls: ['./lost-edit.component.scss']
})
export class LostEditComponent implements OnInit {

  itemName = "";
  description = "";
  image="";
  date="";
  location="";
  name="";
  email="";
  phoneNumber="";
  formMessageHidden =true;

  constructor(private cs:CommonService) { }

  submit(itemName:any, description:any, image:any, date:any, location:any,name:any,email:any, phoneNumber:any ) {
    this.cs.editPost(itemName,description,image,date,location,name,email,phoneNumber).subscribe(data=> {
      this.formMessageHidden = false;
      console.log(data)
    })
  }



  ngOnInit(): void {
  }

}
