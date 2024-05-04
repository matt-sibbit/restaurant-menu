import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEvents().subscribe(events => {
      this.events = events;
    }, error => {
      console.error('Error fetching events:', error);
    });
  }

  getImageUrl(event: Event): string {
    if (event && event._id) {
      return this.dataService.getImageUrl('event', event._id);
    } else {
      // Return a default image URL or handle the case where _id is undefined
      return ''; // Default URL or appropriate handling
    }
  }
}
