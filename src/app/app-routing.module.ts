import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SingupComponent} from './auth/singup/singup.component';
import {SinginComponent} from './auth/singin/singin.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookFormComponent} from './book-list/book-form/book-form.component';
import {SingleBookComponent} from './book-list/single-book/single-book.component';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {path: 'auth/signup', component: SingupComponent},
  {path:  'auth/signin', component: SinginComponent},
  {path:  'books', canActivate: [AuthGuardService], component: BookListComponent},
  {path:  'books/new', canActivate: [AuthGuardService], component: BookFormComponent},
  {path:  'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent},
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: '**', redirectTo: 'books'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
