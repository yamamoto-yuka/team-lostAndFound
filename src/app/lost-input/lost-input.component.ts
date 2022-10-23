import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-lost-input',
  templateUrl: './lost-input.component.html',
  styleUrls: ['./lost-input.component.scss']
})
export class LostInputComponent implements OnInit {
  itemName='';
  description ='';
  image='';
  date='';
  location='';
  name='';
  email='';
  phoneNumber='';
  formMessageHidden = true;
  constructor(private cs:CommonService) { }

  submit(itemName:any, location:any, email:any, phoneNumber:any,  description:any,  image:any, date:any,  name:any){
    this.cs.addPost( this.itemName, this.location, this.email, this.phoneNumber, this.description,this.image, this.date, this.name).subscribe(data =>{
      this.formMessageHidden = false;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
