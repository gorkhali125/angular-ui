import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;
	loading = false;
	submitted = false;

	constructor(
		private formBuilder: FormBuilder,
	) { }

	ngOnInit() {
		this.registerForm = this.formBuilder.group(
			{
				firstName: ['', [Validators.required]],
				lastName: ['', [Validators.required]],
				userName: ['', [Validators.required, Validators.minLength(4)]],
				password: ['', [Validators.required, Validators.minLength(8)]],
				confirmPassword: ['', [Validators.required]],
				email: ['', [Validators.required]],
				phoneNumber: ['', [Validators.required]]
			},
		);
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.registerForm.controls;
	}

	onRegisterSubmit() {
		this.submitted = true;

		// stop here if form is invalid
		if (this.registerForm.invalid) {
			return;
		}

		
		

		this.loading = true;
	}
}