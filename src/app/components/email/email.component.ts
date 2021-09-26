import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from './../../services/email.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {
  data = {
    to: '',
    subject: '',
    message: '',
  };
  flag: boolean = false;
  constructor(private email: EmailService, private snack: MatSnackBar) {}

  ngOnInit(): void {}
  doSubmitForm() {
    console.log('submitted');
    console.log(this.data);
    if (
      this.data.to == '' ||
      this.data.message == '' ||
      this.data.subject == ''
    ) {
      this.snack.open('fields cannot be empty!!', 'OK');
      return;
    }
    this.flag = true;
    this.email.sendEmail(this.data).subscribe(
      (response) => {
        console.log(response);
        this.flag = false;
        this.snack.open('Mail sent...', 'OK');
      },
      (error) => {
        console.log(error);
        this.flag = false;
        this.snack.open('Error!, Please try again...', 'OK');
      }
    );
  }
}
