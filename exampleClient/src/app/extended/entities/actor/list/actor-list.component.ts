import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Router, ActivatedRoute } from '@angular/router';

import { ActorExtendedService } from '../actor.service';
import { ActorNewExtendedComponent } from '../new/actor-new.component';
import { Globals, PickerDialogService, ErrorService } from 'src/app/common/shared';

import { ActorListComponent } from 'src/app/entities/actor/index';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss'],
})
export class ActorListExtendedComponent extends ActorListComponent implements OnInit {
  title: string = 'Actor';
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public global: Globals,
    public dialog: MatDialog,
    public changeDetectorRefs: ChangeDetectorRef,
    public pickerDialogService: PickerDialogService,
    public actorService: ActorExtendedService,
    public errorService: ErrorService
  ) {
    super(router, route, global, dialog, changeDetectorRefs, pickerDialogService, actorService, errorService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  addNew() {
    super.addNew(ActorNewExtendedComponent);
  }
}
