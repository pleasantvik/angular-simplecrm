import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListingComponent } from './leads-listing/leads-listing.component';
import { LeadsToolsComponent } from './leads-listing/leads-tools/leads-tools.component';
import { LeadsGridComponent } from './leads-listing/leads-grid/leads-grid.component';
import { DownloadExcelComponent } from './leads-listing/leads-tools/download-excel/download-excel.component';
import { DownloadPdfComponent } from './leads-listing/leads-tools/download-pdf/download-pdf.component';



@NgModule({
  declarations: [LeadsListingComponent, LeadsToolsComponent, LeadsGridComponent, DownloadExcelComponent, DownloadPdfComponent],
  imports: [
    CommonModule
  ]
})
export class LeadsModule { }
