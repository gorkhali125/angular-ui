import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	loading = false;
	submitted = false;

	constructor(
		private formBuilder: FormBuilder,
	) { }

	ngOnInit() {
		this.loginForm = this.formBuilder.group(
			{
				userName: ['', [Validators.required, Validators.minLength(4)]],
				password: ['', [Validators.required, Validators.minLength(8)]],
			}
		);
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.loginForm.controls;
	}

	onLoginSubmit() {
		this.submitted = true;

		// stop here if form is invalid
		if (this.loginForm.invalid) {
			return;
		}

		this.loading = true;
	}
}
