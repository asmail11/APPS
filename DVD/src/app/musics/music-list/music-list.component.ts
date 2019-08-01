import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from 'src/app/entities/Music';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {
  musics: Observable<Music[]>;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.relaodData();
  }
  relaodData(){
    this.musics = this.musicService.getMusicList();
  }

}
