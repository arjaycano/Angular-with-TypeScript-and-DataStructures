import { Component } from '@angular/core';

@Component({
  selector: 'app-artistlist',
  templateUrl: './artistlist.component.html',
  styleUrl: './artistlist.component.css'
})
export class ArtistlistComponent {
  artistList: string[] = [];
  artistName: string = '';

  addArtists() {
    this.artistList.push(this.artistName);
  }
}
