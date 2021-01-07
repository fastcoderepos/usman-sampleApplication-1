import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { PaymentService } from '../payment.service';
import { IPayment } from '../ipayment';
import { BaseDetailsComponent, Globals, PickerDialogService, ErrorService } from 'src/app/common/shared';

import { CustomerService } from 'src/app/entities/customer/customer.service';
import { RentalService } from 'src/app/entities/rental/rental.service';
import { StaffService } from 'src/app/entities/staff/staff.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss'],
})
export class PaymentDetailsComponent extends BaseDetailsComponent<IPayment> implements OnInit {
  title = 'Payment';
  parentUrl = 'payment';
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public global: Globals,
    public paymentService: PaymentService,
    public pickerDialogService: PickerDialogService,
    public errorService: ErrorService,
    public customerService: CustomerService,
    public rentalService: RentalService,
    public staffService: StaffService
  ) {
    super(formBuilder, router, route, dialog, global, pickerDialogService, paymentService, errorService);
  }

  ngOnInit() {
    this.entityName = 'Payment';
    this.setAssociations();
    super.ngOnInit();
    this.setForm();
    this.getItem();
    this.setPickerSearchListener();
  }

  setForm() {
    this.itemForm = this.formBuilder.group({
      amount: ['', Validators.required],
      paymentDate: ['', Validators.required],
      paymentDateTime: ['', Validators.required],
      paymentId: ['', Validators.required],
      customerId: ['', Validators.required],
      customerDescriptiveField: ['', Validators.required],
      rentalId: ['', Validators.required],
      rentalDescriptiveField: ['', Validators.required],
      staffId: ['', Validators.required],
      staffDescriptiveField: ['', Validators.required],
    });

    this.fields = [
      {
        name: 'amount',
        label: 'amount',
        isRequired: true,
        isAutoGenerated: false,
        type: 'number',
      },

      {
        name: 'paymentDate',
        label: 'payment Date',
        isRequired: true,
        isAutoGenerated: false,
        type: 'date',
      },
      {
        name: 'paymentDateTime',
        label: 'payment Date Time',
        isRequired: true,
        isAutoGenerated: false,
        type: 'time',
      },

      {
        name: 'paymentId',
        label: 'payment Id',
        isRequired: true,
        isAutoGenerated: false,
        type: 'number',
      },
    ];
  }

  onItemFetched(item: IPayment) {
    this.item = item;
    this.itemForm.patchValue(item);
    this.itemForm.get('paymentDate').setValue(item.paymentDate ? new Date(item.paymentDate) : null);
    this.itemForm.get('paymentDateTime').setValue(this.paymentService.formatDateStringToAMPM(item.paymentDate));
  }

  setAssociations() {
    this.associations = [
      {
        column: [
          {
            key: 'customerId',
            value: undefined,
            referencedkey: 'customerId',
          },
        ],
        isParent: false,
        table: 'customer',
        type: 'ManyToOne',
        label: 'customer',
        service: this.customerService,
        descriptiveField: 'customerDescriptiveField',
        referencedDescriptiveField: 'customerId',
      },
      {
        column: [
          {
            key: 'rentalId',
            value: undefined,
            referencedkey: 'rentalId',
          },
        ],
        isParent: false,
        table: 'rental',
        type: 'ManyToOne',
        label: 'rental',
        service: this.rentalService,
        descriptiveField: 'rentalDescriptiveField',
        referencedDescriptiveField: 'rentalId',
      },
      {
        column: [
          {
            key: 'staffId',
            value: undefined,
            referencedkey: 'staffId',
          },
        ],
        isParent: false,
        table: 'staff',
        type: 'ManyToOne',
        label: 'staff',
        service: this.staffService,
        descriptiveField: 'staffDescriptiveField',
        referencedDescriptiveField: 'staffId',
      },
    ];

    this.childAssociations = this.associations.filter((association) => {
      return association.isParent;
    });

    this.parentAssociations = this.associations.filter((association) => {
      return !association.isParent;
    });
  }

  onSubmit() {
    let payment = this.itemForm.getRawValue();
    payment.paymentDate = this.dataService.combineDateAndTime(payment.paymentDate, payment.paymentDateTime);
    delete payment.paymentDateTime;
    super.onSubmit(payment);
  }
}
