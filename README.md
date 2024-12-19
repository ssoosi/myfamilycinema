# Movie App

A movie web application built with Angular and Angular Material that allows users to view a list of movies, view detailed information, and rate them. The app requires user authentication to access the movie details page.

![Movie App Screenshot](/src/app/assets/login.png)


## Features
- **Login functionality:** Users must log in to view movie details.
- **Movie listing:** Displays a paginated list of movies from The Movie Database (TMDb).
- **Movie details page:** View detailed information about the movie, including poster and description.
- **Movie rating:** Users can rate movies between 1 to 10.
- **Responsive design:** The app is fully responsive and adapts to different screen sizes.

## Technologies Used
- **Angular:** A platform for building web applications.
- **Angular Material:** Material design components for the UI.
- **RxJS:** Reactive programming library for handling asynchronous data.
- **The Movie Database (TMDb) API:** For fetching movie data.

## Requirements
Before you can run the application, make sure you have the following installed on your local machine:
- **Node.js** (LTS version recommended): [https://nodejs.org/](https://nodejs.org/)
- **Angular CLI:** Install globally using `npm install -g @angular/cli`.

## Getting Started

### Step 1: Clone the Repository
First, clone the repository to your local machine:
```bash
git clone https://github.com/yourusername/movie-app.git
cd movie-app
```

### Step 2: Install Dependencies
Install the required npm packages:
```bash
npm install
```

### Step 3: Configure the API Key
The app fetches movie data from The Movie Database (TMDb) API. You'll need to replace the API key used in the app with your own key from TMDb.
1. Go to [TMDb](https://www.themoviedb.org/).
2. Create an account or log in.
3. Navigate to **Settings > API** and generate your API key.
4. Replace the current API key in the app's service (likely in `movies.service.ts`) with your own API key.

### Step 4: Run the Application
Once the dependencies are installed and the API key is set up, run the Angular app locally:
```bash
ng serve
```
This will compile and serve the app on [http://localhost:4200/](http://localhost:4200/). Open this URL in your browser to view the application.

### Step 5: Login
To access the movie details page, log in with the following credentials:
- **Username:** voss-solutions
- **Password:** supersecretpassword

If the credentials are correct, you will be redirected to the movie listing page.

### Optional Step: Build the Application
To build the app for production (optimized version), run:
```bash
ng build --prod
```
This will create a `dist/` folder with the production build, which you can deploy to any web server.

## File Structure
```
src/
├── app/
│   ├── components/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── login/
│   │   ├── movie-detail/
│   │   └── movies/
│   ├── services/
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets/
├── environments/
├── styles.css
└── index.html
```

## Troubleshooting
- If you see the error `NG8001: 'mat-spinner' is not a known element`, ensure you have imported the required Angular Material modules in `app.module.ts`.
- Ensure that you have correctly configured the API key for TMDb to retrieve movie data.

## License
This project is open-source and available under the MIT License.

