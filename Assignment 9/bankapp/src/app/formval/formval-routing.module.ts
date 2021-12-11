import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FundtransferComponent } from '../fundtransfer/fundtransfer.component';
import { DepositComponent } from '../deposit/deposit.component';
import { KycComponent } from '../kyc/kyc.component';
const formValRoutes: Routes = [
  { path: 'fundtransfer',  component: FundtransferComponent },
  { path: 'deposit',  component: DepositComponent },
  { path: 'kyc', component:KycComponent}
];

@NgModule({
  imports: [RouterModule.forChild(formValRoutes)],
  exports: [RouterModule]
})
export class FormvalRoutingModule { }
