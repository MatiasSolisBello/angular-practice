import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './components/user/user.component';
import { BodegaComponent } from './components/bodega/bodega.component';
import { ProductComponent } from './components/product/product.component';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
    { path: 'user', component: UserComponent, canActivate: [authGuard] },
    { path: 'bodega', component: BodegaComponent, canActivate: [authGuard, roleGuard] },
    { path: 'product', component: ProductComponent },
];
