import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() title: string = "Toolbar";

  @Output() backClickedEvent = new EventEmitter<null>;
  @Output() chatSupportClickedEvent = new EventEmitter<null>;
  @Output() exitClickedEvent = new EventEmitter<null>;

  backClicked() {
    this.backClickedEvent.emit();
  }

  chatSupportClicked() {
    this.chatSupportClickedEvent.emit();
  }

  exitClicked() {
    this.exitClickedEvent.emit();
  }
}
