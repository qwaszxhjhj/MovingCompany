import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngFor, ngStyle, ngClass

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to the imports array
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // --- Carousel Logic ---
  currentIndex = 0;
  galleryImages = [
    { src: 'https://placehold.co/1000x500/007bff/ffffff?text=客户搬家+1', alt: 'Moving project 1' },
    { src: 'https://placehold.co/1000x500/343a40/ffffff?text=专业打包+2', alt: 'Packing project 2' },
    { src: 'https://placehold.co/1000x500/28a745/ffffff?text=卡车运输+3', alt: 'Transportation 3' },
    { src: 'https://placehold.co/1000x500/dc3545/ffffff?text=抵达新家+4', alt: 'New home 4' },
    { src: 'https://placehold.co/1000x500/ffc107/333333?text=钢琴搬运+5', alt: 'Piano moving 5' },
    { src: 'https://placehold.co/1000x500/17a2b8/ffffff?text=办公室搬迁+6', alt: 'Office relocation 6' }
  ];

  /**
   * Moves to the next slide in the carousel.
   */
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.galleryImages.length;
  }

  /**
   * Moves to the previous slide in the carousel.
   */
  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
  }

  /**
   * Jumps to a specific slide based on its index.
   * @param index The index of the slide to go to.
   */
  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}

