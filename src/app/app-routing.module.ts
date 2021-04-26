import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { UsersComponent } from './components/users/users.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { UsersListComponent } from './components/users/users-list/users-list.component'
import { UsersDataComponent } from './components/users/users-data/users-data.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { AuthGuard } from './common/guards/auth.guard'

const routes:Routes = [
    {path: '', redirectTo: 'users', pathMatch: 'full'},
    {path: 'users', component: UsersComponent, canActivate:[AuthGuard], children: [
        {path: '', component: UsersListComponent},
        {path: ':id', component: UsersDataComponent},
    ]},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    {path: '**', component: NotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}