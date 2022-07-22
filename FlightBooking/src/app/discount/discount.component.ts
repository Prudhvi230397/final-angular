import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { discount, discountData } from '../models/discount';
import { urls } from '../models/urls';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  DiscountModel: discount = new discount();
  urlModel: urls = new urls();
  DiscountDataModel: Array<discountData> = new  Array<discountData>();
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.GetDiscountData();
  }

  GetDiscountData() {
    this.http.get(this.urlModel.urlDiscountDetails).subscribe(res => {console.log(res),this.GetFromServer(res)}, res => {console.log(res),this.GetFromServer(res)});
  }
  GetFromServer(res: any) {
    console.log(res);
    this.DiscountDataModel = res;
  }
  AddDiscount() {
    var discountDetails = {
      discountCode: this.DiscountModel.discountCode,
      discountValue: Number(this.DiscountModel.discountValue),
      expiryDate: this.DiscountModel.expiryDate
    }
    console.log(discountDetails)
    this.http.post(this.urlModel.urlDiscount, discountDetails).subscribe(res => { this.ResponseAlert(res),this.GetDiscountData(), console.log(res) }, res => { this.ResponseAlert(res), this.GetDiscountData(),console.log(res) });
  this.DiscountModel=new discount()
  }

  ResponseAlert(res: any) {
    if (res.status == 200) {
      alert(res.error.text);

    }

  }
  DeleteDiscount(res:discountData)
  {
    
    this.http.delete(this.urlModel.urlDelDiscount+res.discountId).subscribe(res => {this.GetDiscountData(), console.log(res) },  res => {this.GetDiscountData(),console.log(res)});
  }

  hasError(typeofvalidator: string, controlname: string): Boolean {
    return this.DiscountModel.formDiscountGroup.controls[controlname].hasError(typeofvalidator);
  }

}
