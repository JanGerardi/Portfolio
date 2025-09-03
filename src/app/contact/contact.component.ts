import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  nameError = false;
  emailError = false;
  textError = false;
  privacyError = false;

  sendMail(event: Event, nameInput: HTMLInputElement, emailInput: HTMLInputElement, messageInput: HTMLTextAreaElement, checkbox: HTMLInputElement) {
    event.preventDefault();

    this.nameError = false;
    this.emailError = false;
    this.textError = false;
    this.privacyError = false;

    if (!nameInput.value.trim()) {
      this.nameError = true;
    }
    if (!emailInput.value.trim() || !this.validateEmail(emailInput.value)) {
      this.emailError = true;
    }
    if (!messageInput.value.trim()) {
      this.textError = true;
    }
    if (!checkbox.checked) {
      this.privacyError = true;
    }

    if (this.nameError || this.emailError || this.textError || this.privacyError) {
      return;
    }

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    checkbox.checked = false;
  }

  private validateEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
}
