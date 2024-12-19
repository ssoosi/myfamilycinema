import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  rating: number = 0;

  constructor(private route: ActivatedRoute, private movieService: MovieService,  private snackBar: MatSnackBar, private router: Router) {}

  ngOnInit() {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movieService.getMovieDetails(+movieId).subscribe(data => this.movie = data);
    }
  }

  rateMovie() {
    if (this.rating < 1 || this.rating > 10) {
      this.snackBar.open('Please enter a rating between 1 and 10.', 'Close', { duration: 3000 });
      return;
    }
    this.snackBar.open(`Rating submitted: ${this.rating}`, 'Close', { duration: 3000 });
   
  }
}
