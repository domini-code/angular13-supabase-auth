import { Component } from '@angular/core';
import { OptionsForm } from '@auth/form/form.component';
import { ACTIONS } from '@shared/constants/constant';

@Component({
  selector: 'app-sign-in',
  template: '<app-form [options]="options"></app-form>',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  options: OptionsForm = {
    id: ACTIONS.signIn,
    label: ACTIONS.signIn
  }

}
