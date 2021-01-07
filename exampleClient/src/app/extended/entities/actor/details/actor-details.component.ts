import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ActorExtendedService } from '../actor.service';
import { Globals, PickerDialogService, ErrorService } from 'src/app/common/shared';

import { ActorDetailsComponent } from 'src/app/entities/actor/index';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss'],
})
export class ActorDetailsExtendedComponent extends ActorDetailsComponent implements OnInit {
  title: string = 'Actor';
  parentUrl: string = 'actor';
  //roles: IRole[];
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public global: Globals,
    public actorExtendedService: ActorExtendedService,
    public pickerDialogService: PickerDialogService,
    public errorService: ErrorService
  ) {
    super(formBuilder, router, route, dialog, global, actorExtendedService, pickerDialogService, errorService);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
