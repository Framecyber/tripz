import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateRoutingModule } from './translate-routing.module';

import { TranslateComponent } from './translate.component';
import { ImageToTextComponent } from './pages/image-to-text/image-to-text.component';

@NgModule({
  declarations: [
    TranslateComponent,
    ImageToTextComponent
  ],
  imports: [
    CommonModule,
    TranslateRoutingModule
  ]
})
export class TranslateModule { }
