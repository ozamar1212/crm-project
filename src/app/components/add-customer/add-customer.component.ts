import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  customer: Customer = { firstName: '', lastName: '', phone: '', email: '' };
  constructor(
    private cs: CustomersService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.cs.createDoc(this.customer);
    this.activeModal.close();
  }
}
