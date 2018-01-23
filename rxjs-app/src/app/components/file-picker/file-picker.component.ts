import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss']
})
export class FilePickerComponent implements OnInit {

  @Output() filesPicked: EventEmitter<any> = new EventEmitter<any>();

  draggedOver = false;

  constructor() { }

  ngOnInit() {
  }

  filesSelected(files: any) {
    const filesArray = [];
    for (let i = 0; i < files.length; i++) {
      filesArray.push(files[i]);
    }
    this.filesPicked.emit(filesArray);
  }

  filesChanged(event: Event) {
    const input: HTMLInputElement = (event.target as HTMLInputElement);
    const files: FileList = input.files;
    this.filesSelected(files);
    input.value = null;
  }

  filesDropped(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    const input = (event.target as HTMLInputElement);
    this.draggedOver = false;

    this.filesSelected(event.dataTransfer.files || input.files);

    if (input && input.value) {
      input.value = null;
    }
  }

  dragIn(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.draggedOver = true;
  }

  dragOut(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.draggedOver = false;
  }

  clickWrapper(event: MouseEvent, label: HTMLLabelElement) {
    if (event.target !== label) {
      label.click();
    }
  }
}
