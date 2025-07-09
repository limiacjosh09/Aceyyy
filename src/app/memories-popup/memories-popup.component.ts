  import {
    Component,
    AfterViewInit,
    ViewChild,
    ElementRef,
    OnDestroy,
  } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
  @Component({
    selector: 'app-memories-popup',
    templateUrl: './memories-popup.component.html',
    styleUrls: ['./memories-popup.component.scss'],
  })
  export class MemoriesPopupComponent implements AfterViewInit, OnDestroy {
    images = [
      'assets/memories/1.jpg',
      'assets/memories/2.jpg',
      'assets/memories/3.jpg',
      'assets/memories/4.jpg',
      'assets/memories/5.jpg',
      'assets/memories/6.jpg',
      'assets/memories/7.jpg',
      'assets/memories/8.jpg',
      'assets/memories/9.jpg',
      'assets/memories/10.jpg',
      'assets/memories/11.jpg',
      'assets/memories/12.jpg',
      'assets/memories/13.jpg',
      'assets/memories/14.jpg',
      'assets/memories/15.jpg',
      'assets/memories/16.jpg',
      'assets/memories/17.jpg',
      'assets/memories/18.jpg',
      'assets/memories/19.jpg',
      'assets/memories/20.jpg',
      'assets/memories/21.jpg',
      'assets/memories/22.jpg',
    ];

    duplicatedImages = [...this.images, ...this.images];

    @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLDivElement>;

    constructor(private dialogRef: MatDialogRef<MemoriesPopupComponent>) {}

  closePopup() {
    this.dialogRef.close(); // 👈 this closes the modal
  }
    private animationFrame: any;
    private scrollSpeed = 0.4; 
    private scrollPosition = 0;

    ngAfterViewInit(): void {
  this.shuffleImages(); // 👈 shuffle first
  this.duplicatedImages = [...this.images, ...this.images]; // 👈 duplicate shuffled images
  setTimeout(() => {
    this.startAutoScroll();
  }, 0);
}


    shuffleImages() {
    this.images = this.images
      .map((img) => ({ img, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ img }) => img);
  }

    ngOnDestroy(): void {
      this.stopAutoScroll();
    }

  startAutoScroll(): void {
    const carouselEl = this.carousel.nativeElement;
    carouselEl.scrollLeft = 0;
    this.scrollPosition = 0;

    const scroll = () => {
      this.scrollPosition += this.scrollSpeed;

      if (this.scrollPosition >= carouselEl.scrollWidth / 2) {
        this.scrollPosition = 0;
      }

      carouselEl.scrollLeft = Math.floor(this.scrollPosition);
      this.animationFrame = requestAnimationFrame(scroll);
    };

    setTimeout(() => {
      this.animationFrame = requestAnimationFrame(scroll);
    }, 500);
  }

    stopAutoScroll(): void {
      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame);
      }
    }
    
  }
