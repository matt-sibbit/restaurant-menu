import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMenuItems().subscribe(data => {
      this.menuItems = data;
    }, error => {
      console.error('Error fetching menu items:', error);
    });
  }
}
