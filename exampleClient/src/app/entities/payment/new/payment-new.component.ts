import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PaymentService } from '../payment.service';
import { IPayment } from '../ipayment';
import { Globals, BaseNewComponent, PickerDialogService, ErrorService } from 'src/app/common/shared';

import { CustomerService } from 'src/app/entities/customer/customer.service';
import { RentalService } from 'src/app/entities/rental/rental.service';
import { StaffService } from 'src/app/entities/staff/staff.service';

@Component({
  selector: 'app-payment-new',
  templateUrl: './payment-new.component.html',
  styleUrls: ['./payment-new.component.scss'],
})
export class PaymentNewComponent extends BaseNewComponent<IPayment> implements OnInit {
  title: string = 'New Payment';
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PaymentNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public global: Globals,
    public pickerDialogService: PickerDialogService,
    public paymentService: PaymentService,
    public errorService: ErrorService,
    public customerService: CustomerService,
    public rentalService: RentalService,
    public staffService: StaffService
  ) {
    super(
      formBuilder,
      router,
      route,
      dialog,
      dialogRef,
      data,
      global,
      pickerDialogService,
      paymentService,
      errorService
    );
  }

  ngOnInit() {
    this.entityName = 'Payment';
    this.setAssociations();
    super.ngOnInit();
    this.setForm();
    this.checkPassedData();
    this.setPickerSearchListener();
  }

  setForm() {
    this.itemForm = this.formBuilder.group({
      amount: ['', Validators.required],
      paymentDate: ['', Validators.required],
      paymentDateTime: ['12:00 AM', Validators.required],
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
        service: this.customerService,
        label: 'customer',
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
        service: this.rentalService,
        label: 'rental',
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
        service: this.staffService,
        label: 'staff',
        descriptiveField: 'staffDescriptiveField',
        referencedDescriptiveField: 'staffId',
      },
    ];
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
