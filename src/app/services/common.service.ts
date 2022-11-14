import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LostItem } from '../interface/interface';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  // private projectsurl = 'https://cms.yukayamamoto.me/api/lost-and-founds';
  private newProjectsUrl = 'https://lostandfoundapis.herokuapp.com/';


  // get

  // getAllposts() {
  //   return this.http.get(this.projectsurl);
  // }

  getAllposts(){
    return this.http.get(this.newProjectsUrl)
  }

  getPostByID(id: number) {
    return this.http.get<{ data: LostItem }>(this.newProjectsUrl + '/' + id);
  }

  claim(id: number) {
    let claim = {
      claimed:true
    };
    return this.http.put(this.newProjectsUrl + '/' + id, claim);
  }

  // editPost(
  //   itemName: string,
  //   location: string,
  //   email: string,
  //   phoneNumber: string,
  //   description: string,
  //   imageURL: string,
  //   date: string,
  //   name: string
  // ) {
  //   let data = {
  //     data: {
  //       Title:itemName,
  //       Location:location,
  //       Email:email,
  //       Phonenumber:phoneNumber,
  //       Description: description,
  //       Image:imageURL,
  //       Date_found:date,
  //       Contact_name: name
  //     }
  //   };
  //   return this.http.put<LostItem>(this.newProjectsUrl, data);
  // }

  editPost(formdata:any) {
    // let data = {
    //   data: {
    //     Title:itemName,
    //     Location:location,
    //     Email:email,
    //     Phonenumber:phoneNumber,
    //     Description: description,
    //     Image:imageURL,
    //     Date_found:date,
    //     Contact_name: name
    //   }
    // };
    return this.http.put(this.newProjectsUrl, formdata);
  }


  uploadFile(formdata:any){

    // let data={ title:title,
    //   formdata:formdata
    // };

    return this.http.post(this.newProjectsUrl + "/upload", formdata);


  }
  // add posts


  // addPost(albumId_fromC:number, title_fromC:string, url_fromC:string){


// return this.http.put(this.projectsurl + '/' + id, closeBody);
// }


// add posts
// addPost(title:string, image:string,location:string,description:string,identifying_question:string,claimed:boolean,contact_name:string,email:string,phonenumber:string,date_found:string) {
//   let data = {
//     title: title,
//     image:image,
//     location: location,
//     description: description,
//     identifying_question:identifying_question,
//     claimed: claimed,
//     contact_name: contact_name,
//     email: email,
//     phonenumber: phonenumber,
//     date_found: date_found,
//     }
//     return this.http.post(this.newProjectsUrl + "/newItem", data);

//   };

// }

addPost(formdata:any) {
  // let data = {
  //   title: title,
  //   image:image,
  //   location: location,
  //   description: description,
  //   identifying_question:identifying_question,
  //   claimed: claimed,
  //   contact_name: contact_name,
  //   email: email,
  //   phonenumber: phonenumber,
  //   date_found: date_found,
  //   }
    return this.http.post(this.newProjectsUrl + "/newItem", formdata);

  };

}



// uploadFile(formdata:any){
//    return this.http.post(this.newProjectsUrl + "/uploadFile", formdata)
// }

// addPost(albumId_fromC:number, title_fromC:string, url_fromC:string){

//   let newphotobody={

//         albumId_fromC: albumId_fromC,
//         title_fromC: title_fromC,
//         url_fromC :  url_fromC,

//         // newpost:newpost (newost comes from the clinet)
//       }

//       // return this.http.post<{newPhoto:[Photo], message:any}>(this.photoUrl, newphotobody);
//       return this.http.post<Photo>(this.photoUrl, newphotobody);
// }


// edit


  //   let newphotobody={

  //         albumId_fromC: albumId_fromC,
  //         title_fromC: title_fromC,
  //         url_fromC :  url_fromC,

  //         // newpost:newpost (newost comes from the clinet)
  //       }

  //       // return this.http.post<{newPhoto:[Photo], message:any}>(this.photoUrl, newphotobody);
  //       return this.http.post<Photo>(this.photoUrl, newphotobody);
  // }

  // edit

  // editPost(id:string, input:string){
  //   let updateCrudBody ={
  //     "id":id,
  //     "input":input
  //   }
  //   // console.log(updateCrudBody);

  //   return this.http.put<{message:any, update:boolean}>(this.crudUpdateURL, updateCrudBody)

  // }

