import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {

  services?: Service[];
  currentService: Service= {};
  currentIndex = -1;
  title = '';

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.retrieveServices();
  }

  retrieveServices(): void {
    this.serviceService.getAll()
      .subscribe({
        next: (data) => {
          this.services = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveServices();
    this.currentService = {};
    this.currentIndex = -1;
  }

  setActiveService(service: Service, index: number): void {
    this.currentService = service;
    this.currentIndex = index;
  }

  removeAllServices(): void {
    this.serviceService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentService = {};
    this.currentIndex = -1;

    this.serviceService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.services = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
