import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicesComponentsService {
  url = 'http://localhost:3000/admin';
  urlc = 'http://localhost:3000/college';
  urls = 'http://localhost:3000/student';
  urlct = 'http://localhost:3000/certificate';
  urlp = 'http://localhost:3000/placement';

  constructor(private http: HttpClient) {}

  //admin component
  getlist() {
    return this.http.get(this.url);
  }
  saveAdmin(data: any) {
    return this.http.post(this.url, data);
  }
  deleteCustomer(id: any) {                              //DELETE Method
    
    return this.http.delete('http://localhost:3000/admin/' + id);
  }
  getCurrentAdmin(id: any) {
    return this.http.get('http://localhost:3000/admin/' + id);
  }
  updateCustomer(id: any, data: any) {
    return this.http.put('http://localhost:3000/admin/' + id, data);
  }

  //college component
  saveCollege(data: any) {
    return this.http.post(this.urlc, data);
  }
  getlistCollege() {
    return this.http.get(this.urlc);
  }
  deleteCollege(id: any) {                                  //DELETE Method
    
    return this.http.delete('http://localhost:3000/college/' + id);
  }
  getCurrentCollege(id: any) {
    return this.http.get('http://localhost:3000/college/' + id);
  }
  updateCollege(id: any, data: any) {
    return this.http.put('http://localhost:3000/college/' + id, data);
  }

  //student component
  saveStudent(data: any) {
    return this.http.post(this.urls, data);
  }
  getlistStudent() {
    return this.http.get('http://localhost:3000/student/');
  }
  deleteStudent(id: any) {                                    //DELETE Method
    
    return this.http.delete('http://localhost:3000/student/' + id);
  }
  getCurrentStudent(id: any) {
    return this.http.get('http://localhost:3000/student/' + id);
  }
  updateStudent(id: any, data: any) {
    return this.http.put('http://localhost:3000/student/' + id, data);
  }

  //certificate component
  saveCertificate(data: any) {
    return this.http.post(this.urlct, data);
  }
  getlistCertificate() {
    return this.http.get('http://localhost:3000/certificate/');
  }
  deleteCertificate(id: any) {                                    //DELETE Method
    
    return this.http.delete('http://localhost:3000/certificate/' + id);
  }
  getCurrentCertificate(id: any) {
    return this.http.get('http://localhost:3000/certificate/' + id);
  }
  updateCertificate(id: any, data: any) {
    return this.http.put('http://localhost:3000/certificate/' + id, data);
  }

  //placement component
  savePlacement(data: any) {
    return this.http.post(this.urlp, data);
  }
  getlistPlacement() {
    return this.http.get('http://localhost:3000/placement/');
  }
  deletePlacement(id: any) {                                    //DELETE Method
    
    return this.http.delete('http://localhost:3000/placement/' + id);
  }
  getCurrentPlacement(id: any) {
    return this.http.get('http://localhost:3000/placement/' + id);
  }
  updatePlacement(id: any, data: any) {
    return this.http.put('http://localhost:3000/placement/' + id, data);
  }
}
