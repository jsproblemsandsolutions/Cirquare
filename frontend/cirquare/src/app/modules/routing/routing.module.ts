import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/home/home.component';
import { PagenotfoundComponent } from 'src/app/components/common/pagenotfound/pagenotfound.component';
import { PageUnderConstructionComponent } from 'src/app/components/common/page-under-construction/page-under-construction.component';
import { ContactUsComponent } from 'src/app/components/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: PageUnderConstructionComponent
  },
  {
    path: 'portfolio',
    component: PageUnderConstructionComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
