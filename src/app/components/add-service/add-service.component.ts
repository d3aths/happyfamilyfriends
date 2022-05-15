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
    description: '',
    published: false
  };
  submitted = false;

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
  }

  saveService(): void {
    const data = {
      title: this.service.title,
      description: this.service.description
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
      description: '',
      published: false
    };
  }

}
