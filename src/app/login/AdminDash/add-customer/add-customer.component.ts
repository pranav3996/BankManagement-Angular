import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


      


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {




states:Array<String>=['Maharashtra','Goa'];
  

// public customers=new Array<Customer>();

// constructor(private customerService: CustomerService){
  // customer : Customer =new Customer();
  // constructor(private customerService : CustomerService , private router : Router){}
  
  // saveCustomer(){
  //   this.customerService.createCustomer(this.customer).subscribe(data =>{
  //     alert("Data added")
  //     this.getAllCustomer();
  //   })
  
  // }
  
  
  // getAllCustomer(){
  //   this.router.navigate(['/customers']);
  // }
  
  // onSubmit(){
  //   this.saveCustomer();
  // }
  // }
// }
// ngOnInit(){
//   this.customerService.getCustomersList().subscribe(response => {
//     this.customers = response.map(item => 
//       {
//         return new Customer ( 
//             item.c_id,
//             item.firstName,
//             item.middleName,
//             item.lastName,
//            item.email,
//            item.mobileNumber,
//            item.alterNumber,
//            item.date,
//            item.aadhaar,
//            item.pan,
//            item.marriedStatus,
//            item.addressType,
//            item.occupation,
//            item.streetAddress,
//            item.city,
//            item.state,
//            item.zip

//         );
//       });
//   });
// }
  CustomerArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;



currentCustomerID = "";
firstName: String="";
middleName: String="";
lastName: String="";
email: String="";
mobileNumber:Number=0;
alterNumber:Number=0;
date: String="";
aadhaar:Number=0;
pan: String="";
marriedStatus:String="";
addressType:String="";
occupation: String="";
streetAddress: String="";
city: String="";
state: String="";
zip:Number=0;



  constructor(private http: HttpClient){
    this.getAllCustomer();
  }
  getAllCustomer()
  {
    
    this.http.get("http://localhost:8080/api/v1/customer/getAllCustomer")
  
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;   
        console.log(resultData);
        this.CustomerArray = resultData;
    });
  }

  register()
  {
  
    let bodyData = {
      "firstName" : this.firstName,
      "middleName" : this.middleName,
      "lastName":this.lastName,
      "mobileNumber" : this.mobileNumber,
      "alterNumber":this.alterNumber,
      "email":this.email,
      "date":this.date,
      "aadhaar":this.aadhaar,
      "pan":this.pan,
      "marriedStatus":this.marriedStatus,
      "addressType":this.addressType,
      "occupation":this.occupation,
      "streetAddress":this.streetAddress,
      "city":this.city,
      "state":this.state,
      "zip":this.zip
    };
    this.http.post("http://localhost:8080/api/v1/customer/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Customer Registered Successfully");
        this.getAllCustomer();
 
        this.firstName = '';
        this.middleName = '';
        this.lastName ='';
        this.mobileNumber=0;
        this.alterNumber=0;
        this.email='';
        this.date='';
        this.aadhaar=0
        this.pan='';
        this.marriedStatus='';
        this.addressType='';
        this.occupation='',
        this.streetAddress='';
        this.city='';
        this.state='';
     
        this.zip=0


    });
  }

  setUpdate(data: any)
  {
    this.firstName = data.firstName;
    this.middleName = data.middleName;
    this.lastName =data.lastName;
    this.mobileNumber  = data.mobileNumber;
    this.alterNumber =data.alterNumber;
    this.email=data.email;
    this.date=data.date;
    this.aadhaar=data.aadhaar;
    this.pan=data.pan;
    this.marriedStatus=data.marriedStatus;
    this.addressType=data.addressType;
    this.occupation=data.occupation;
    this.streetAddress=data.streetAddress;
    this.city=data.city;
    this.state=data.state;
    this.zip=data.zip;
    this.currentCustomerID=data.c_id
 
  }
  UpdateRecords()
  {
    let bodyData = {
      "c_id":this.currentCustomerID,
      "firstName" : this.firstName,
      "middleName" : this.middleName,
      "lastName":this.lastName,
      "mobileNumber" : this.mobileNumber,
      "alterNumber":this.alterNumber,
      "email":this.email,
      "date":this.date,
      "aadhaar":this.aadhaar,
      "pan":this.pan,
      "marriedStatus":this.marriedStatus,
      "addressType":this.addressType,
      "occupation":this.occupation,
      "streetAddress":this.streetAddress,
      "city":this.city,
      "state":this.state,
      "zip":this.zip
    
    };
    
    this.http.put("http://localhost:8080/api/v1/customer/update",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Customer Registered Updated")
        this.getAllCustomer();
       
    });
  }
  save()
  {
    if(this.currentCustomerID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }      
  }
  setDelete(data: any)
  {
    
    
    this.http.delete("http://localhost:8080/api/v1/customer/deletecustomer"+ "/"+ data.c_id,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Customer Deleted")
        this.getAllCustomer();
 
      
  
    });
  }

}
