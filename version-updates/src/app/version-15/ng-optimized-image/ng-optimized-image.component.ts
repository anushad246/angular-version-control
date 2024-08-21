import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-optimized-image',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './ng-optimized-image.component.html',
  styleUrl: './ng-optimized-image.component.scss'
})
export class NgOptimizedImageComponent {

  cus_data = [
    {
      category: "Gamming",
      subCategorie: "The Catalyzer",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat",
      views: "234k",
      comments: "564k",
      img: "Frame 1000003578 (4)"
    },
    {
      category: "Business",
      subCategorie: "The 400 Blows",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      views: "375k",
      comments: "123k",
      img: "Frame 1000003578 (5)"
    },
    {
      category: "Fitness",
      subCategorie: "Shooting Stars",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat",
      views: "467K",
      comments: "64k",
      img: "Frame 1000003578 (6)"
    }
  ]
  
}
