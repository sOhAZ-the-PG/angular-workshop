import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-validation-error',
  standalone: true,
  templateUrl: './validation-error.component.html',
  styleUrl: './validation-error.component.css',
  imports: [CommonModule],
})
export class ValidationErrorComponent {
  @Input() control!: NgModel;
  @Input() messages: { [key: string]: string } = {};
  @Input() submitted: boolean = false;
}
