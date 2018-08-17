import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FileSizePipe implements PipeTransform {
  // ES6 extension
  transform(size: number, extension: string = 'MB') {
    return (size / (1024 * 1024)).toFixed(2) + extension;
  }
} 