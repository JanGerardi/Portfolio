import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


    sendMail(event: Event): boolean {
    event.preventDefault();

    const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
    const emailInput = document.querySelector('input[name="email"]') as HTMLInputElement;
    const messageInput = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
    const checkbox = document.getElementById('checkbox') as HTMLInputElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    const isChecked = checkbox.checked;

    if (!isChecked) {
      alert('Please agree to the privacy policy.');
      return false;
    }

    const mailto = `mailto:jan_gerardi@outlook.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${name} (${email})`;
    window.location.href = mailto;

    // Formular zurücksetzen
    const form = document.querySelector('form') as HTMLFormElement;
    form.reset();

    return false;
  }
}
