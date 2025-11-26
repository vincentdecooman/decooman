import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './contact-section.component.html'
})
export class ContactSectionComponent {
  private readonly WEB3FORMS_ACCESS_KEY = 'e3484c5a-0c90-4e6c-a069-c8405e8e0ffc';

  formData = {
    name: '',
    email: '',
    message: ''
  };

  readonly isSubmitting = signal(false);
  readonly submitMessage = signal('');
  readonly submitSuccess = signal(false);

  async onSubmit(): Promise<void> {
    this.isSubmitting.set(true);
    this.submitMessage.set('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: this.WEB3FORMS_ACCESS_KEY,
          name: this.formData.name,
          email: this.formData.email,
          message: this.formData.message,
          subject: `New message from ${this.formData.name}`,
        })
      });

      const result = await response.json();

      if (result.success) {
        this.submitSuccess.set(true);
        this.submitMessage.set('contact.form.success');
        
        this.formData = { name: '', email: '', message: '' };
        
        setTimeout(() => {
          this.submitMessage.set('');
        }, 5000);
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
