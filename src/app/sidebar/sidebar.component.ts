import { GlobalService } from './../global.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	userCardForm = new FormGroup({});
	submitted = false;

	constructor(
		private formBuilder: FormBuilder,
		public globalService: GlobalService
	) { }

	ngOnInit(): void {
		this.userCardForm = this.formBuilder.group({
			cardNumber: ['', Validators.required],
			cardHolderName: ['', Validators.required],
			cardType: ['', Validators.required],
		});
	}

	get f() { return this.userCardForm.controls; }

	onSubmit() {
		this.submitted = true;

		if (this.userCardForm.invalid) {
			return;
		}

		debugger

		if (!this.globalService.cardData) {
			this.globalService.cardData = [];
		}
		this.globalService.cardData.push(this.userCardForm.value);
		this.globalService.cardDetails$.next(this.globalService.cardData);
		this.globalService.storeCardDetails();
		this.globalService.toast('success', 'Stored successfully');
		console.log(this.globalService.cardData);

	}

}
