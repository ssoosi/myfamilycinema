import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly apiUrl = 'https://api.themoviedb.org/3';
  private readonly apiKey = '58c73f28602311ea8f07800238141c9a';

  constructor(private http: HttpClient) {}

  // Fetch a paginated list of movies
  getMovies(page: number = 1): Observable<any> {
    const params = new HttpParams().set('api_key', this.apiKey).set('page', page);
    return this.http.get(`${this.apiUrl}/movie/popular`, { params });
  }

  // Get details of a specific movie
  getMovieDetails(movieId: number): Observable<any> {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get(`${this.apiUrl}/movie/${movieId}`, { params });
  }

  // Rate a movie
  rateMovie(movieId: number, rating: number): Observable<any> {
    const body = { value: rating };
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.post(`${this.apiUrl}/movie/${movieId}/rating`, body, { params });
  }
}
