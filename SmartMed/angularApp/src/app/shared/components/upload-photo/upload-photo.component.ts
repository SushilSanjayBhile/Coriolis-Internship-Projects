import { Component, OnInit, Input, Output, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Observer } from 'rxjs';
import { Observable } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit, OnDestroy {

  @Input() fGroup: FormGroup;

  // @Output() selectedPhoto: string;

  // flags
  file_upload_btn: boolean;
  camera_btn: boolean;
  camera_click_btn: boolean;
  show_photo: boolean;
  show_camera: boolean;

  Webcam = false;

  loadingPreview: boolean;
  progressPreview: number;
  type = 'indeterminate';
  photoPreview = null;
  photoSelected: boolean;

  streamWidth = 238;
  streamHeight = 332;
  sourceSelection = true;
  cameraActive = false;
  fileUploadActive = false;

  current_state = new Subject<string>();
  btn_state_subscription: Subscription;
  containers_subscription: Subscription;

  @Input() photo: Subject<any>;

  clickEvent: Subject<void>;

  constructor(private elem: ElementRef) {

    this.clickEvent = new Subject<void>();

    // add subscribers to photo preview and webcam
    this.containers_subscription = this.current_state.subscribe(
      (state) => {
        switch (state) {
          case 'camera_activate':
            this.Webcam = true;
            this.photoSelected = false;
            this.loadingPreview = false;
            break;
          case 'file_upload_active':
            this.Webcam = false;
            this.photoSelected = false;
            this.loadingPreview = false;
            break;
          case 'on_file_selected':
            this.Webcam = false;
            this.photoSelected = false;
            this.loadingPreview = false;
            break;
          case 'on_file_loading':
            this.Webcam = false;
            this.photoSelected = false;
            this.loadingPreview = true;
            break;
          case 'camera_on_click':
          case 'on_file_loaded':
            this.Webcam = false;
            this.photoSelected = true;
            this.loadingPreview = false;
            break;
          case 'initial':
            this.Webcam = false;
            this.photoSelected = false;
            this.loadingPreview = false;
        }
      }
    );

    // add subscribers to the btn state
    this.btn_state_subscription = this.current_state.subscribe(
      (state) => {
        switch (state) {
          case 'camera_activate':
            console.log('Camera Active');
            this.file_upload_btn = true;
            this.camera_btn = false;
            this.camera_click_btn = true;
            break;
          case 'file_upload_active':
            console.log('file upload active');
            this.file_upload_btn = true;
            this.camera_btn = true;
            this.camera_click_btn = false;
            break;
          case 'on_file_selected':
          case 'preview_loading':
          case 'camera_on_click':
          case 'initial':
            this.file_upload_btn = true;
            this.camera_btn = true;
            this.camera_click_btn = false;
            break;
          case 'on_file_loaded':
            break;
        }
      }
    );
  }

  ngOnInit() {
    /**
     * onInit: the state should be
     * file_upload_btn: true
     * camera_btn: true
     * camera_click_btn: false
     */
    this.current_state.next('initial');
  }

  ngOnDestroy() {
    this.btn_state_subscription.unsubscribe();
    this.containers_subscription.unsubscribe();
  }

  onFileChange(event) {
    // state change
    this.current_state.next('on_file_selected');

    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {

      const file = this.elem.nativeElement.querySelector('#photo_file').files[0];
      this.photo.next({
        'file': file,
        'file_name': file.name
      });

      reader.onloadstart = (e) => {
        this.current_state.next('on_file_loading');
      };

      reader.onprogress = (e) => {
        this.loadingPreview = true;
        if (e.lengthComputable) {
          this.type = 'determinate';
          this.progressPreview = ((e.loaded / e.total) * 100);
        }
      };

      reader.onloadend = () => {
        this.current_state.next('on_file_loaded');
      };

      reader.onload = () => {
        this.progressPreview = 100;
        this.photoPreview = reader.result;
      };

      reader.readAsDataURL(file);
    }

  }

  activateWebCam = () => {
    // change button state;
    this.current_state.next('camera_activate');
  }

  clickWebCam = () => {
    this.clickEvent.next();
    this.current_state.next('camera_on_click');
    console.log('clicked');
  }

  clickFileUpload = (element) => {
    element.click();
    this.current_state.next('file_upload_active');
  }

  getImage = (imageData: WebcamImage) => {
    console.log('imageData');
    this.photoPreview = imageData.imageAsDataUrl;

    const ImageURL = imageData.imageAsDataUrl;
    // Split the base64 string in data and contentType
    const block = ImageURL.split(';');
    // Get the content type of the image
    const contentType = block[0].split(':')[1]; // In this case "image/gif"
    // get the real base64 content of the file
    const realData = block[1].split(',')[1]; // In this case "R0lGODlhPQBEAPeoAJosM...."

    // Convert it to a blob to upload
    const blob = this.b64toBlob(realData, contentType, null);
    this.photo.next(new Object({
      'file': blob,
      'file_name': 'webcam.jpg'
    }));

  }

  public get clickEventObservable(): Observable<void> {
    return this.clickEvent.asObservable();
  }

 /**
 * Convert a base64 string in a Blob according to the data and contentType.
 *
 * @param b64Data {String} Pure base64 string without contentType
 * @param contentType {String} the content type of the file i.e (image/jpeg - image/png - text/plain)
 * @param sliceSize {Int} SliceSize to process the byteCharacters
 * @see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
 * @return Blob
 */
  b64toBlob = (b64Data, contentType, sliceSize) => {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }

}
