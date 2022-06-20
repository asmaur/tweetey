import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import { ChipModule } from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    ToastModule,
    CardModule,
    DialogModule,
    InputTextModule,
    PanelModule,
    ChipModule,
    ChipsModule
  ],
  exports: [
    MenubarModule,
    ButtonModule,
    ToastModule,
    CardModule,
    DialogModule,
    InputTextModule,
    PanelModule,
    ChipModule,
    ChipsModule
  ]
})
export class PrimeModule { }
