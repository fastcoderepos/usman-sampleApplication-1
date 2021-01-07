import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CustomerService } from '../customer.service';
import { ICustomer } from '../icustomer';
import { Globals, BaseNewComponent, PickerDialogService, ErrorService } from 'src/app/common/shared';

import { AddressService } from 'src/app/entities/address/address.service';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss'],
})
export class CustomerNewComponent extends BaseNewComponent<ICustomer> implements OnInit {
  title: string = 'New Customer';
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CustomerNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public global: Globals,
    public pickerDialogService: PickerDialogService,
    public customerService: CustomerService,
    public errorService: ErrorService,
    public addressService: AddressService
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
      customerService,
      errorService
    );
  }

  ngOnInit() {
    this.entityName = 'Customer';
    this.setAssociations();
    super.ngOnInit();
    this.setForm();
    this.checkPassedData();
    this.setPickerSearchListener();
  }

  setForm() {
    this.itemForm = this.formBuilder.group({
      active: [''],
      activebool: [false, Validators.required],
      createDate: ['', Validators.required],
      customerId: ['', Validators.required],
      email: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      lastUpdate: [''],
      lastUpdateTime: ['12:00 AM'],
      storeId: [''],
      addressId: ['', Validators.required],
      addressDescriptiveField: ['', Validators.required],
    });

    this.fields = [
      {
        name: 'active',
        label: 'active',
        isRequired: false,
        isAutoGenerated: false,
        type: 'number',
      },
      {
        name: 'activebool',
        label: 'activebool',
        isRequired: true,
        isAutoGenerated: false,
        type: 'boolean',
      },
      {
        name: 'createDate',
        label: 'create Date',
        isRequired: true,
        isAutoGenerated: false,
        type: 'date',
      },
      {
        name: 'customerId',
        label: 'customer Id',
        isRequired: true,
        isAutoGenerated: false,
        type: 'number',
      },
      {
        name: 'email',
        label: 'email',
        isRequired: false,
        isAutoGenerated: false,
        type: 'string',
      },
      {
        name: 'firstName',
        label: 'first Name',
        isRequired: true,
        isAutoGenerated: false,
        type: 'string',
      },
      {
        name: 'lastName',
        label: 'last Name',
        isRequired: true,
        isAutoGenerated: false,
        type: 'string',
      },
      {
        name: 'lastUpdate',
        label: 'last Update',
        isRequired: false,
        isAutoGenerated: false,
        type: 'date',
      },
      {
        name: 'lastUpdateTime',
        label: 'last Update Time',
        isRequired: false,
        isAutoGenerated: false,
        type: 'time',
      },
      {
        name: 'storeId',
        label: 'store Id',
        isRequired: false,
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
            key: 'addressId',
            value: undefined,
            referencedkey: 'addressId',
          },
        ],
        isParent: false,
        table: 'address',
        type: 'ManyToOne',
        service: this.addressService,
        label: 'address',
        descriptiveField: 'addressDescriptiveField',
        referencedDescriptiveField: 'addressId',
      },
    ];
    this.parentAssociations = this.associations.filter((association) => {
      return !association.isParent;
    });
  }

  onSubmit() {
    let customer = this.itemForm.getRawValue();
    customer.lastUpdate = this.dataService.combineDateAndTime(customer.lastUpdate, customer.lastUpdateTime);
    delete customer.lastUpdateTime;
    super.onSubmit(customer);
  }
}
