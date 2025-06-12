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
import { FormUserComponent } from './components/user/form-user/form-user.component';
import { FormBodegaComponent } from './components/bodega/form-bodega/form-bodega.component';
import { FormProductComponent } from './components/product/form-product/form-product.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
    { path: 'user', component: UserComponent, 
        canActivate: [authGuard, roleGuard],  
        data: { 
            roles: ['ADMIN_ROLE'] 
        } 
    },
    { path: 'user/create', component: FormUserComponent, 
        canActivate: [authGuard, roleGuard],  
        data: { 
            roles: ['ADMIN_ROLE'] 
        } 
    },
    { path: 'user/edit/:id', component: FormUserComponent, 
        canActivate: [authGuard, roleGuard],  
        data: { 
            roles: ['ADMIN_ROLE'] 
        } 
    },
    { path: 'bodega', component: BodegaComponent, canActivate: [authGuard, roleGuard] },
    { path: 'bodega/create', component: FormBodegaComponent, 
        canActivate: [authGuard, roleGuard],  
        data: { 
            roles: ['ADMIN_ROLE', 'BODEGA_ROLE'] 
        } 
    },
    { path: 'bodega/edit/:id', component: FormBodegaComponent, 
        canActivate: [authGuard, roleGuard],  
        data: { 
            roles: ['ADMIN_ROLE', 'BODEGA_ROLE'] 
        } 
    },
    { path: 'product', component: ProductComponent },
    { path: 'product/create', component: FormProductComponent, 
        canActivate: [authGuard, roleGuard],  
        data: { 
            roles: ['ADMIN_ROLE'] 
        } 
    },
    { path: 'product/edit/:id', component: FormProductComponent, 
        canActivate: [authGuard, roleGuard],  
        data: { 
            roles: ['ADMIN_ROLE'] 
        } 
    },
];
