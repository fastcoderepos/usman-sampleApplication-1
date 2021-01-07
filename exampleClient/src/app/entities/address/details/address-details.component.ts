import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { AddressService } from '../address.service';
import { IAddress } from '../iaddress';
import { BaseDetailsComponent, Globals, PickerDialogService, ErrorService } from 'src/app/common/shared';

import { CityService } from 'src/app/entities/city/city.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss'],
})
export class AddressDetailsComponent extends BaseDetailsComponent<IAddress> implements OnInit {
  title = 'Address';
  parentUrl = 'address';
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public global: Globals,
    public addressService: AddressService,
    public pickerDialogService: PickerDialogService,
    public errorService: ErrorService,
    public cityService: CityService
  ) {
    super(formBuilder, router, route, dialog, global, pickerDialogService, addressService, errorService);
  }

  ngOnInit() {
    this.entityName = 'Address';
    this.setAssociations();
    super.ngOnInit();
    this.setForm();
    this.getItem();
    this.setPickerSearchListener();
  }

  setForm() {
    this.itemForm = this.formBuilder.group({
      address: ['', Validators.required],
      address2: [''],
      addressId: ['', Validators.required],
      district: ['', Validators.required],
      lastUpdate: ['', Validators.required],
      lastUpdateTime: ['', Validators.required],
      phone: ['', Validators.required],
      postalCode: [''],
      cityId: ['', Validators.required],
      cityDescriptiveField: ['', Validators.required],
    });

    this.fields = [
      {
        name: 'address',
        label: 'address',
        isRequired: true,
        isAutoGenerated: false,
        type: 'string',
      },

      {
        name: 'address2',
        label: 'address 2',
        isRequired: false,
        isAutoGenerated: false,
        type: 'string',
      },

      {
        name: 'addressId',
        label: 'address Id',
        isRequired: true,
        isAutoGenerated: false,
        type: 'number',
      },

      {
        name: 'district',
        label: 'district',
        isRequired: true,
        isAutoGenerated: false,
        type: 'string',
      },

      {
        name: 'lastUpdate',
        label: 'last Update',
        isRequired: true,
        isAutoGenerated: false,
        type: 'date',
      },
      {
        name: 'lastUpdateTime',
        label: 'last Update Time',
        isRequired: true,
        isAutoGenerated: false,
        type: 'time',
      },

      {
        name: 'phone',
        label: 'phone',
        isRequired: true,
        isAutoGenerated: false,
        type: 'string',
      },

      {
        name: 'postalCode',
        label: 'postal Code',
        isRequired: false,
        isAutoGenerated: false,
        type: 'string',
      },
    ];
  }

  onItemFetched(item: IAddress) {
    this.item = item;
    this.itemForm.patchValue(item);
    this.itemForm.get('lastUpdate').setValue(item.lastUpdate ? new Date(item.lastUpdate) : null);
    this.itemForm.get('lastUpdateTime').setValue(this.addressService.formatDateStringToAMPM(item.lastUpdate));
  }

  setAssociations() {
    this.associations = [
      {
        column: [
          {
            key: 'cityId',
            value: undefined,
            referencedkey: 'cityId',
          },
        ],
        isParent: false,
        table: 'city',
        type: 'ManyToOne',
        label: 'city',
        service: this.cityService,
        descriptiveField: 'cityDescriptiveField',
        referencedDescriptiveField: 'cityId',
      },
      {
        column: [
          {
            key: 'addressId',
            value: undefined,
            referencedkey: 'addressId',
          },
        ],
        isParent: true,
        table: 'customer',
        type: 'OneToMany',
        label: 'customers',
      },
      {
        column: [
          {
            key: 'addressId',
            value: undefined,
            referencedkey: 'addressId',
          },
        ],
        isParent: true,
        table: 'staff',
        type: 'OneToMany',
        label: 'staffs',
      },
      {
        column: [
          {
            key: 'addressId',
            value: undefined,
            referencedkey: 'addressId',
          },
        ],
        isParent: true,
        table: 'store',
        type: 'OneToMany',
        label: 'stores',
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
    let address = this.itemForm.getRawValue();
    address.lastUpdate = this.dataService.combineDateAndTime(address.lastUpdate, address.lastUpdateTime);
    delete address.lastUpdateTime;
    super.onSubmit(address);
  }
}
