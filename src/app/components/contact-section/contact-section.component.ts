import { Component, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './contact-section.component.html'
})
export class ContactSectionComponent {
  private readonly WEB3FORMS_ACCESS_KEY = 'e3484c5a-0c90-4e6c-a069-c8405e8e0ffc';

  contactForm = new FormGroup({
    name:    new FormControl('', Validators.required),
    email:   new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  readonly isSubmitting = signal(false);
  readonly submitMessage = signal('');
  readonly submitSuccess = signal(false);

  get name()    { return this.contactForm.get('name')!; }
  get email()   { return this.contactForm.get('email')!; }
  get message() { return this.contactForm.get('message')!; }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) return;

    this.isSubmitting.set(true);
    this.submitMessage.set('');

    const { name, email, message } = this.contactForm.value;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: this.WEB3FORMS_ACCESS_KEY,
          name,
          email,
          message,
          subject: `New message from ${name}`,
        })
      });

      const result = await response.json();

      if (result.success) {
        this.submitSuccess.set(true);
        this.submitMessage.set('contact.form.success');
        this.contactForm.reset();
        setTimeout(() => this.submitMessage.set(''), 5000);
      } else {
        throw new Error(result.message || 'Failed to send');
      }
    } catch (error) {
      console.error('Web3Forms error:', error);
      this.submitSuccess.set(false);
      this.submitMessage.set('contact.form.error');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
