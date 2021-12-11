import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';


import { FormvalRoutingModule } from './formval-routing.module';

import { FundtransferComponent } from '../fundtransfer/fundtransfer.component';
import { DepositComponent } from '../deposit/deposit.component';
import { KycComponent } from '../kyc/kyc.component';
@NgModule({
  declarations: [FundtransferComponent,DepositComponent,KycComponent],
  imports: [
    CommonModule,
    FormvalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormvalModule { }
