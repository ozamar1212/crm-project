import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customersRef = collection(this.fs, 'customers');

  constructor(private fs: Firestore) {}

  getAll(): Observable<Customer[]> {
    return collectionData(this.customersRef, { idField: 'id' }) as Observable<
      Customer[]
    >;
  }
  createDoc(customer: Customer) {
    return addDoc(this.customersRef, customer);
  }

  delCustomer(customer: Customer) {
    const customerRef = doc(this.fs, `customers/${customer.id}`);
    return deleteDoc(customerRef);
  }

  editCustomer(customer: Customer) {
    const editDocRef = doc(this.fs, `customers/${customer.id}`);
    return setDoc(editDocRef, customer);
  }

  getCustomerById(id: string) {
    const editRef = doc(this.fs, `customers/${id}`);
    return docData(editRef, { idField: 'id' }) as Observable<Customer>;
  }
}
