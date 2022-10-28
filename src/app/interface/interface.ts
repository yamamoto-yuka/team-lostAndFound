export interface LostItem{
    id:number,
    attributes:{
      Title: string;
      Location: string;
      Claim: boolean;
      Found: boolean;
      LostOrFound: string;
      Email: string;
      Phonenumber: string;
      Description: string;
      Image: string;
      Date_found: string;
      Claim_name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      Identifying_question: string;
      Close: boolean;

      // 今後修正するinterface
      // Title:string;
      // Image: string;
      // Location:string;
      // Description:string;
      // Date_found:string;
      // Identifying_question: string;
      // Claimed:boolean;
      // Contact_name: string;
      // Email : string;
      // Phonenumber:string;
    }
}
