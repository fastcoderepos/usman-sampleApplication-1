import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Router, ActivatedRoute } from '@angular/router';

import { LanguageExtendedService } from '../language.service';
import { LanguageNewExtendedComponent } from '../new/language-new.component';
import { Globals, PickerDialogService, ErrorService } from 'src/app/common/shared';

import { LanguageListComponent } from 'src/app/entities/language/index';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss'],
})
export class LanguageListExtendedComponent extends LanguageListComponent implements OnInit {
  title: string = 'Language';
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public global: Globals,
    public dialog: MatDialog,
    public changeDetectorRefs: ChangeDetectorRef,
    public pickerDialogService: PickerDialogService,
    public languageService: LanguageExtendedService,
    public errorService: ErrorService
  ) {
    super(router, route, global, dialog, changeDetectorRefs, pickerDialogService, languageService, errorService);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  addNew() {
    super.addNew(LanguageNewExtendedComponent);
  }
}
