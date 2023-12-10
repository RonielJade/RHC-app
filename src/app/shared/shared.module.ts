import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../tabs/tabs.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';




@NgModule({
  declarations: [TabsComponent,FooterComponent],
  imports: [CommonModule,IonicModule,RouterModule],
  exports: [TabsComponent,FooterComponent]
})
export class SharedModule { }
