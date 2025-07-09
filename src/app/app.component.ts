import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemoriesPopupComponent } from './memories-popup/memories-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading = true;
splashFadeOut = false;
  isPlaying = false;
    volume = 0.1;
    

  private audio = new Audio('assets/kusapiling.mp3');

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private dialog: MatDialog) {
       this.audio.loop = true;
    this.audio.volume = this.volume;
  }
  
  openMemories() {
    this.dialog.open(MemoriesPopupComponent, {
      width: '600px'
    });
  }

  ngOnInit(): void {
  setTimeout(() => {
    this.splashFadeOut = true; 
    setTimeout(() => {
      this.isLoading = false;
    }, 750); 
  }, 4000); 
}


  hearts = Array.from({ length: 20 }, (_, i) => ({
  left: Math.random() * 100 + '%',
  delay: Math.random() * 10 + 's',
  size: Math.random() * 8 + 8 + 'px',
}));

    toggleMusic(): void {
    this.isPlaying = !this.isPlaying;
  this.isPlaying ? this.audio.play() : this.audio.pause();
  this.audio.loop = true
  }



}

