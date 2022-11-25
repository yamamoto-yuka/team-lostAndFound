import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lost-edit',
  templateUrl: './lost-edit.component.html',
  styleUrls: ['./lost-edit.component.scss']
})
export class LostEditComponent implements OnInit {

  title = "";
  image = "";
  location="";
  description="";
  date_found="";
  identifying_question="";
  contact_name="";
  email="";
  phonenumber ="";
  date = "";
  formMessageHidden = true;

  constructor(private cs:CommonService, private route:ActivatedRoute) { }

  submit(itemName:any, description:any, image:any, date:any, location:any,name:any,email:any, phoneNumber:any ) {
    this.cs.editPost(itemName,description,image,date,location,name,email,phoneNumber).subscribe(data=> {
      this.formMessageHidden = false;
      console.log(data)
    })
  }



  ngOnInit(): void {
    let id:any = this.route.snapshot.paramMap.get("id");
    this.cs.getPostByID(id).subscribe(res => {
      console.log(res)
      // this.title = res.title;
      // this.image = productData.rating;
      // this.location = productData.price;
      // this.description = productData.stock;
      // this.date_found = productData.description;
      // this.identifying_question = productData.display;
      // this.contact_name = productData.display;
      // this.email = productData.display;
      // this.phonenumber = productData.display;
      // this.date = productData.display;
    })
  }

}
