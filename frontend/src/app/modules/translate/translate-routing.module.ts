import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateComponent } from './translate.component';
import { ImageToTextComponent } from './pages/image-to-text/image-to-text.component';

const routes: Routes = [
  {
    path: '',
    component: TranslateComponent,
    children: [
      {
        path: 'image-to-text',
        component: ImageToTextComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranslateRoutingModule { }
