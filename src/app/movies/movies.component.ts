import { Component, OnInit, HostListener } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  loading: boolean = false;
  totalMovies: number = 30;
  gridCols: number = 6;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.fetchMovies();
    this.adjustGridCols(window.innerWidth);
  }

  fetchMovies(page: number = 1): void {
    this.loading = false; // Stop the loader when data is received
    this.movieService.getMovies(page).subscribe((data: any) => {
      this.movies = data.results;
      this.totalMovies = data.total_results;
    });
  }

  onPageChange(event: any): void {
    this.fetchMovies(event.pageIndex + 1);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.adjustGridCols(event.target.innerWidth);
  }

  adjustGridCols(width: number): void {
    if (width < 600) {
      this.gridCols = 1;
    } else if (width < 960) {
      this.gridCols = 2;
    } else {
      this.gridCols = 7;
    }
  }
}
