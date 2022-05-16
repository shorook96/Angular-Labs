import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers';
import { IProduct } from '../Shared Classes and types/IProduct';
import { ICategory } from '../Shared Classes and types/ICategory';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   imageproduct:string="/assets/mini.jpg"
   storeName:string="twix";
  //  imageSrc = 'assets/cover.png'  
  //  imageAlt = 'image'
   
   storeLogo:string = "";
   Discount:DiscountOffers=DiscountOffers.firstOne;
   headers=["ID","Name","Quantity","Price"]
   ProductList=[
     {ID:"1", 
       Name:"twixm",
       Quantity:"1",
       Price:"100",
       //Img:"img"
      },
       {ID:"2", 
         Name:"twixii",
         Quantity:"1",
         Price:"100",
         //Img:"img"
        }
   ];
   CategoryList:ICategory[]=[
     {ID:1, Name:"firstCatgory"},
     {ID:2,Name:"secondCatgory"},
     {ID:3,Name:"thirdCatogry"}  
   ];
   selected = "----";
   update(e:any){
     this.selected = e.target.value
   }
   ClientName:string="";
   nameOfClient="Shorook Abdelbaqi";
   IsPurshased:boolean=false;
   buy(){
     this.IsPurshased=!this.IsPurshased
   }
   
   

  constructor() { }

  ngOnInit(): void {
  }

}
