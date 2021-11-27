import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizer'
})
export class SanitizerPipe implements PipeTransform {

  constructor(private s: DomSanitizer) {}

  transform(value: string): SafeResourceUrl {
    return this.s.bypassSecurityTrustResourceUrl(value);
  }

}
