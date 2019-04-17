import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }


  prods = [
    { name: 'Laptop', price: 1984848 },
    { name: 'Mobile', price: 45455 },
    { name: 'Charger', price: 45454546 }
  ]





  getAllProducts() {
    let appiUrl = "http://0.0.0.0:8080/api/products";

    //let promise = fetch(appiUrl);
    //return promise.then(response => response.json())

    return this.prods;

  }
  getAllReviews(productId) {
    let appiUrl = `http://0.0.0.0:8080/api/products/${productId}/reviews`;
    // return fetch(appiUrl).then(response => response.json())
    return this.httpClient.get(appiUrl).toPromise()
  }

}
