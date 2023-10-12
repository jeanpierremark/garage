import { CanActivateFn } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const authGuard: CanActivateFn = (route, state) => {
  if(LoginComponent.islogin=='true') {
  return true;
  }
  else{
    return false;
  }
};
