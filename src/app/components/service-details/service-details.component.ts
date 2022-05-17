import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentService: Service = {
    title: '',
    category: '',
    details: '',
    availableTokens: 0,
    date: ''
    // published: false
  };
  
  message = '';

  constructor(
    private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getService(this.route.snapshot.params["id"]);
    }
  }

  getService(id: string): void {
    this.serviceService.get(id)
      .subscribe({
        next: (data) => {
          this.currentService = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  // updatePublished(status: boolean): void {
  //   const data = {
  //     title: this.currentService.title,
  //     category: this.currentService.category,
  //     details: this.currentService.details,
  //     availableTokens: this.currentService.availableTokens,
  //     date: this.currentService.date,
  //     // published: status
  //   };

  //   this.message = '';

  //   this.serviceService.update(this.currentService.id, data)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.currentService.published = status;
  //         this.message = res.message ? res.message : 'The status was updated successfully!';
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  updateService(): void {
    this.message = '';

    this.serviceService.update(this.currentService.id, this.currentService)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This service was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteService(): void {
    this.serviceService.delete(this.currentService.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/services']);
        },
        error: (e) => console.error(e)
      });
  }

}
