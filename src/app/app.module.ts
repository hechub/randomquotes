import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QuotePageComponent } from './quote-page/quote-page.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'quote-page', component: QuotePageComponent },
  { path: '',
    redirectTo: '/quote-page',
    pathMatch: 'full'
  },
  { path: '**', component: QuotePageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    QuotePageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
     //{ enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
