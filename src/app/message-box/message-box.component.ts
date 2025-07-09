import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessagePopupComponent } from '../message-popup/message-popup.component';
import { MemoriesPopupComponent } from '../memories-popup/memories-popup.component';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() isMemories: boolean = false;
  @Input() color: string = '#9EC6F3';

  constructor(private dialog: MatDialog) {}

  openMessage(): void {
    if (this.isMemories) {
      this.dialog.open(MemoriesPopupComponent, {
        width: '700px',
 
      });
    } else {
      this.dialog.open(MessagePopupComponent, {
        data: { title: this.title, message: this.message }
      });
    }
  }
}
