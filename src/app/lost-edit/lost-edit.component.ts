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
  description = "";
  identifying_question='';
  image="";
  date_found="";
  location="";
  contact_name="";
  email="";
  phonenumber="";
  formMessageHidden =true;

  filename:string= '';

  myformdata:any;
  

  constructor(private cs:CommonService, private route:ActivatedRoute) { }


  trackFile(event:any){
    console.log(event);
    let myfile = event.target.files[0];
    this.filename = myfile;
    // it is an array so you need to target which index you want //
    console.log('new' + myfile);
  }


  // submit(itemName:any, description:any, image:any, date:any, location:any,name:any,email:any, phoneNumber:any ) {
  //   this.cs.editPost(itemName,description,image,date,location,name,email,phoneNumber).subscribe(data=> {
  //     this.formMessageHidden = false;
  //     console.log(data)
  //   })
  // }

  submit() {
    const formdata = new FormData();
    // FormData is predefied method
    formdata.append("image", this.filename);
    formdata.append("title", this.title);
    formdata.append("location", this.location);
    formdata.append("description", this.description);
    formdata.append("claimed", "false");
    formdata.append("identifying_question", this.identifying_question);
    formdata.append("contact_name", this.contact_name);
    formdata.append("email", this.email);
    formdata.append("phonenumber", this.phonenumber);
    formdata.append("date_found", this.date_found);

    this.cs.editPost(formdata).subscribe(data=> {
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
