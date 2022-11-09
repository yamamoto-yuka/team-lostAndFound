import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import{Router} from '@angular/router'
// import { format } from 'mysql2';


@Component({
  selector: 'app-lost-input',
  templateUrl: './lost-input.component.html',
  styleUrls: ['./lost-input.component.scss']
})
export class LostInputComponent implements OnInit {
  title='';
  image='';
  location='';
  description='';
  identifying_question='';
  claimed=false;
  contact_name='';
  email='';
  phonenumber='';
  date_found='';
  filename:string= '';

  myformdata:any;

  constructor(private cs:CommonService,  private router:Router) { }



  trackFile(event:any){
    console.log(event);
    let myfile = event.target.files[0];
    this.filename = myfile.name;
    // it is an array so you need to target which index you want //
    console.log(myfile);

    // now send the file details to a server with formdata format
    const formdata = new FormData();
    // FormData is predefied method
    formdata.append("image", myfile, myfile.name);
    this.myformdata = formdata
    console.log("form data is ", myfile)




  }


  submit (){



    // console.log(this.title, this.filename, this.location, this.description,this.identifying_question, this.claimed, this.contact_name, this.email, this.phonenumber, this.date_found,this.myformdata);


    this.cs.uploadFile(this.myformdata).subscribe(uplodMessage=>{
      console.log(uplodMessage);
      console.log("uplodMessage is ", uplodMessage)

    })

    this.cs.addPost( this.title, this.filename, this.location,this.description, this.identifying_question, this.claimed, this.contact_name, this.email, this.phonenumber, this.date_found).subscribe(data =>{

     console.log("addPost data is ", data)

      // this.formMessageHidden = false;
      // console.log("data " , data);

      this.router.navigate(['/']);
    })


    window.location.reload();
    window.scrollTo(0, 0);

    // form.reset();



    //   this.location ='';
    //   this.description ='';
    //   this.identifying_question='';
    //   this.contact_name='';
    //   this.email='';
    //   this.phonenumber='';


  }




  ngOnInit(): void {
  }

}
