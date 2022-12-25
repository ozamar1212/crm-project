import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {
  @Input() id?: string;
  customer: Customer = { firstName: '', lastName: '', phone: '', email: '' };

  constructor(
    private cs: CustomersService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    if (this.id) {
      this.cs.getCustomerById(this.id).subscribe((res: Customer) => {
        this.customer = res;
      });
    }
  }
  onSubmit() {
    this.cs
      .editCustomer(this.customer)
      .then(() => {
        this.activeModal.close();
      })
      .catch((err) => console.log(err));
  }
}
