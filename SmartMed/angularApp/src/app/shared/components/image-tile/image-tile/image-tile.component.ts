import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../../../../interfaces/patient';

@Component({
  selector: 'app-image-tile',
  templateUrl: './image-tile.component.html',
  styleUrls: ['./image-tile.component.css']
})
export class ImageTileComponent implements OnInit {

  @Input() resource: Patient;
  @Input() showName = false;

  loading = true;

  constructor() { }

  ngOnInit() {
  }

  imageLoaded() {
    this.loading = false;
    console.log('loaded');
  }
}
