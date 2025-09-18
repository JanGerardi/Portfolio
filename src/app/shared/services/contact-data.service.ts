import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContactDataService {
  private contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false
  };

  getContactData() {
    return this.contactData;
  }

  setContactData(data: any) {
    this.contactData = { ...data };
  }

  resetContactData() {
    this.contactData = {
      name: '',
      email: '',
      message: '',
      privacy: false
    };
  }
}