import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, RouterModule, FormsModule, TranslateDirective, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  nameError = false;
  emailEmptyError = false;
  emailInvalidError = false;
  textError = false;
  privacyError = false;

  nameFocused = false;
  emailFocused = false;
  messageFocused = false;

  submitSuccess = false;

  mailTest = false;

  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false
  };

  post = {
    endPoint: 'https://jan-gerardi.com/portfolio/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm){
    this.nameError = !this.contactData.name.trim();
    this.emailEmptyError = !this.contactData.email.trim();
    this.emailInvalidError = !this.emailEmptyError && !/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(this.contactData.email);
    this.textError = !this.contactData.message.trim();
    this.privacyError = !this.contactData.privacy;

    if (ngForm.valid && ngForm.submitted && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          ngForm.resetForm();
          this.submitSuccess = true;
        },
        error: (error) => {
          console.error(error);
          this.submitSuccess = false;
        },
        complete: () => console.info('send post complete'),
      });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.submitSuccess = true;
    }  else {
      this.submitSuccess = false;
    }
  }
}
