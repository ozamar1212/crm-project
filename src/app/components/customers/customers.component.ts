import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { ViewCustomerComponent } from '../view-customer/view-customer.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  constructor(private modal: NgbModal, private cs: CustomersService) {}

  ngOnInit(): void {
    this.cs.getAll().subscribe((data: Customer[]) => {
      this.customers = data;
    });
  }

  AddCustumer() {
    this.modal.open(AddCustomerComponent, { size: 'lg', centered: true });
  }

  deleteCustomer(customer: Customer) {
    if (confirm('are you sure you want to delete this customer?')) {
      this.cs
        .delCustomer(customer)
        .then(() => console.log('customer deleted successefully'))
        .catch((err) => console.log(err));
    }
  }

  editCustomer(customer: Customer) {
    const modal = this.modal.open(EditCustomerComponent, {
      size: 'lg',
      centered: true,
    });
    modal.componentInstance.id = customer.id;
  }
  viewCustomer(customer: Customer) {
    const modal = this.modal.open(ViewCustomerComponent, {
      size: 'lg',
      centered: true,
    });
    modal.componentInstance.id = customer.id;
  }
}
