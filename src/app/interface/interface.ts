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
    }
}
