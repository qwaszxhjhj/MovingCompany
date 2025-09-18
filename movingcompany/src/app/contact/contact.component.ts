import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // Import FormsModule and NgForm

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // Define properties to hold the form data
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // This method will be called when the form is submitted
  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const recipient = 'yongfamoving@gmail.com';
      const subject = encodeURIComponent(this.formData.subject);
      const body = encodeURIComponent(
        `Name: ${this.formData.name}\n` +
        `Email: ${this.formData.email}\n\n` +
        `Message:\n${this.formData.message}`
      );

      // Create the mailto link
      const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

      // Open the user's default email client
      window.location.href = mailtoLink;
    }
  }
}
