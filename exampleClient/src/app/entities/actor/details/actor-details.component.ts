import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ActorService } from '../actor.service';
import { IActor } from '../iactor';
import { BaseDetailsComponent, Globals, PickerDialogService, ErrorService } from 'src/app/common/shared';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss'],
})
export class ActorDetailsComponent extends BaseDetailsComponent<IActor> implements OnInit {
  title = 'Actor';
  parentUrl = 'actor';
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public global: Globals,
    public actorService: ActorService,
    public pickerDialogService: PickerDialogService,
    public errorService: ErrorService
  ) {
    super(formBuilder, router, route, dialog, global, pickerDialogService, actorService, errorService);
  }

  ngOnInit() {
    this.entityName = 'Actor';
    this.setAssociations();
    super.ngOnInit();
    this.setForm();
    this.getItem();
    this.setPickerSearchListener();
  }

  setForm() {
    this.itemForm = this.formBuilder.group({
      actorId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      lastUpdate: ['', Validators.required],
      lastUpdateTime: ['', Validators.required],
    });

    this.fields = [
      {
        name: 'actorId',
        label: 'actor Id',
        isRequired: true,
        isAutoGenerated: false,
        type: 'number',
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
    ];
  }

  onItemFetched(item: IActor) {
    this.item = item;
    this.itemForm.patchValue(item);
    this.itemForm.get('lastUpdate').setValue(item.lastUpdate ? new Date(item.lastUpdate) : null);
    this.itemForm.get('lastUpdateTime').setValue(this.actorService.formatDateStringToAMPM(item.lastUpdate));
  }

  setAssociations() {
    this.associations = [
      {
        column: [
          {
            key: 'actorId',
            value: undefined,
            referencedkey: 'actorId',
          },
        ],
        isParent: true,
        table: 'filmActor',
        type: 'OneToMany',
        label: 'filmActors',
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
    let actor = this.itemForm.getRawValue();
    actor.lastUpdate = this.dataService.combineDateAndTime(actor.lastUpdate, actor.lastUpdateTime);
    delete actor.lastUpdateTime;
    super.onSubmit(actor);
  }
}