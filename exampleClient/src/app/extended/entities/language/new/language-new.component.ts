import { Component, OnInit, Inject } from '@angular/core';
import { LanguageExtendedService } from '../language.service';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Globals, PickerDialogService, ErrorService } from 'src/app/common/shared';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { LanguageNewComponent } from 'src/app/entities/language/index';

@Component({
  selector: 'app-language-new',
  templateUrl: './language-new.component.html',
  styleUrls: ['./language-new.component.scss'],
})
export class LanguageNewExtendedComponent extends LanguageNewComponent implements OnInit {
  title: string = 'New Language';
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<LanguageNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public global: Globals,
    public pickerDialogService: PickerDialogService,
    public languageExtendedService: LanguageExtendedService,
    public errorService: ErrorService
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
      languageExtendedService,
      errorService
    );
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
