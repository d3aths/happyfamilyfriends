import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-add-Sservice',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  service: Service = {
    title: '',
    category: '',
    details: '',
    availableTokens: 0,
    date: ''
    // published: false
  };
  submitted = false;

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
  }

  saveService(): void {
    const data = {
      title: this.service.title,
      category: this.service.category,
      details: this.service.details,
      availableTokens: this.service.availableTokens,
      date: this.service.date,
    };

    this.serviceService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newService(): void {
    this.submitted = false;
    this.service = {
      title: '',
      category: '',
      details: '',
      availableTokens: 0,
      date: ''
      // published: false
    };
  }

}
