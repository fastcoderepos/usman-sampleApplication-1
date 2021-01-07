import { Component, OnInit, Inject } from '@angular/core';
import { CategoryExtendedService } from '../category.service';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Globals, PickerDialogService, ErrorService } from 'src/app/common/shared';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CategoryNewComponent } from 'src/app/entities/category/index';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.scss'],
})
export class CategoryNewExtendedComponent extends CategoryNewComponent implements OnInit {
  title: string = 'New Category';
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CategoryNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public global: Globals,
    public pickerDialogService: PickerDialogService,
    public categoryExtendedService: CategoryExtendedService,
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
      categoryExtendedService,
      errorService
    );
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
