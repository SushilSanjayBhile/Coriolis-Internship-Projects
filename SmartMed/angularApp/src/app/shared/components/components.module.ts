import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';
import { MaterialModule } from '../../material.module';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { WebcamModule } from 'ngx-webcam';
import { ImageTileComponent } from './image-tile/image-tile/image-tile.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    WebcamModule,
  ],
  declarations: [
    PageTitleComponent,
    UploadPhotoComponent,
    ImageTileComponent,
  ],
  exports: [
    PageTitleComponent,
    UploadPhotoComponent,
    ImageTileComponent,
  ]
})
export class ComponentsModule { }
