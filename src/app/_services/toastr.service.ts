import { Injectable } from '@angular/core';
import { NbToastrService, NbComponentStatus, NbGlobalPosition, NbGlobalPhysicalPosition } from '@nebular/theme';
import { ToasterConfig } from 'angular2-toaster';
@Injectable({ providedIn: 'root' })
export class ToastrService {
    config: ToasterConfig;
    index = 1;
    destroyByClick = true;
    duration = 4000;
    hasIcon = false;
    position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
    preventDuplicates = false;
    status: NbComponentStatus = 'danger';
    body: '';

  constructor(private toastrService: NbToastrService) {}


  simpleToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      hasIcon: this.hasIcon,
      duration: this.duration,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `${title}` : '';

    // this.index += 1;
    this.toastrService.show(body, `${titleContent}`, config);
  }
}
