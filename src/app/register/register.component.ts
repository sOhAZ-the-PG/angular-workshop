import { Component, ViewChild } from '@angular/core';
import { RegisterForm } from '../models/registerform';
import { AuthService } from '../services/auth.service';
import { SwalComponent, WillOpenEvent } from '@sweetalert2/ngx-sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  @ViewChild('errorSwal')
  public readonly errorSwal!: SwalComponent;
  constructor(private authService: AuthService, public dialog: MatDialog) {}

  form: RegisterForm = new RegisterForm();

  onSubmit() {
    const { username, email, password } = this.form;

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    this.authService.register(username, email, password).subscribe({
      next: (data) => {
        console.log(data);
        this.dialog.open(ErrorDialogComponent, { data: {} });
      },
      error: (err) => {
        console.error(err);
        this.errorSwal.fire();
      },
    });
  }

  public swalWillOpen(event: WillOpenEvent): void {
    // Most events (those using $event in the example above) will let you access the modal native DOM node, like this:
    console.log(event.modalElement);
  }
}
