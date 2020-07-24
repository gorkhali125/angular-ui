import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})

export class AuthService {
	private serverPort = environment.SERVER_PORT;

	constructor(private http: HttpClient) { }

	register(user: any) {
		return this.http.post(`http://localhost:${this.serverPort}/register`, user);
	}
}
