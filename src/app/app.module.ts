import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ProfileModule } from './profile/profile.module';
import { HighlightDirective } from './highlight.directive';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UsersComponent,
    LoansComponent,
    LoanTypesComponent,
    AddLoanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
