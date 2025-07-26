# Movie Database App

## Overview
Movie Database App is a dynamic, single-page web application built with **React.js**, showcasing my expertise in modern frontend development for a full stack portfolio. Integrated with the **TMDB API**, this app enables users to browse movies, search for specific titles, manage a favorites list, and explore trending movies via an interactive carousel. Styled with **Tailwind CSS** for a responsive, polished UI, it leverages **React Router** for seamless navigation and **React Context API** for efficient state management. A trailer playback feature, routing to a dedicated page, is currently in development, demonstrating my ability to build scalable, API-driven applications.

## 🌟 Live Demo
Explore the app in action: [View Live Demo on Vercel](https://react-movie-app-rho-peach.vercel.app/)  
*Note*: Hosted on Vercel with an auto-generated deployment link. Interact with the search box, trending carousel, and favorites system to experience the full functionality.

## Screenshots
Below are screenshots highlighting the app’s core features, responsive design, and user-friendly interface, showcasing my skills in React, API integration, and UI/UX design.

### Homepage 
![Homepage](frontend/screenshots/homepage.png)  
*Displays the homepage of movies fetched from the TMDB API, styled with Tailwind CSS for a modern, responsive layout.*

### Trending Carousel 
![Carousel](frontend/screenshots/TrendingCarousel.png)  
*Displays the homepage with a dynamic carousel of trending movies with their trailers fetched from the TMDB API, styled with Tailwind CSS for a modern, responsive layout.*


### Search Functionality
![Search Functionality](frontend/screenshots/search-box.png)  
*Showcases the search box, allowing users to find movies by title or keyword, demonstrating real-time API queries and dynamic rendering.*

### Favorites Page
![Favorites Page](frontend/screenshots/favorites-page.png)  
*Depicts the favorites page where users can view and manage saved movies, utilizing local storage and React Context API for state management.*


### Movie Details Page (In Development)
![Movie Details Page is currently in development](frontend/screenshots/movie-details.png)  
*Illustrates a detailed view of a selected movie, including poster, description, and a trailer playback option (in development), highlighting React Router navigation.*


## Key Features
- **Movie Browsing**: Fetches and displays movie data (titles, posters, descriptions) from the TMDB API.
- **Search Functionality**: Enables users to search for movies by title or keyword with real-time results.
- **Trending Carousel**: Showcases trending movies in an interactive, user-friendly carousel.
- **Favorites Management**: Add or remove movies from a favorites list, persisted in local storage.
- **Page Routing**: Seamless navigation between home, search, movie details, and favorites pages using **React Router**.
- **Responsive Design**: Optimized for desktops, tablets, and mobiles with **Tailwind CSS**.
- **Trailer Playback (In Development)**: Routes to a dedicated page to play movie trailers upon clicking a movie card.
- **State Management**: Leverages **React Context API**, `useState`, and `useEffect` for efficient data handling and API integration.

## Technical Highlights
This project demonstrates my proficiency in:
- **Frontend Development**: Building reusable React components with hooks (`useState`, `useEffect`) and Context API.
- **API Integration**: Fetching and processing TMDB API data with robust error handling and real-time search.
- **Responsive UI/UX**: Designing a mobile-first interface with Tailwind CSS for accessibility and aesthetics.
- **Routing**: Implementing client-side navigation with React Router for a seamless single-page app experience.
- **Data Persistence**: Using local storage to maintain user favorites across sessions.
- **Modern JavaScript**: Writing clean, ES6+ code for maintainability and scalability.

## Technologies Used
- **React.js**: Core library for dynamic, component-based UI.
- **Swiper.js**: Provides sliding 3d carousel with coverflow effects
- **React Router**: Enables seamless client-side navigation.
- **Tailwind CSS**: Utility-first framework for rapid, responsive styling.
- **TMDB API**: Provides real-time movie data for browsing and search.
- **JavaScript (ES6+)**: Drives application logic and interactivity.
- **HTML5**: Structures the application.
- **Vercel**: Hosts the deployed application for live access.

## Installation
To run the Movie Database App locally:
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/movie-database-app.git
   cd movie-database-app
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Set Up TMDB API Key**:
   - Obtain an API key from [TMDB](https://www.themoviedb.org/).
   - Create a `.env` file in the project root:
     ```
     REACT_APP_TMDB_API_KEY=your-api-key
     ```
4. **Run the Application**:
   Start the development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Usage
- **Search Movies**: Use the search box to find movies by title or keyword, with results updated in real time.
- **Browse Movies**: Explore movies on the homepage, fetched from the TMDB API.
- **Trending Carousel**: Scroll through trending movies in the interactive carousel.
- **Manage Favorites**: Click the heart/star icon to add/remove movies from your favorites list.
- **Navigate Pages**: Use the navigation bar to access home, search, movie details, or favorites pages.
- **Trailer Playback (In Development)**: Click a movie card to view its trailer on a dedicated page.
- **Persistent Data**: Favorites are saved in local storage for continuity.

## Project Structure
```plaintext
movie-database-app/
├── frontend/
   ├── public/
   │   ├── index.html       # Main HTML file
   │   └── ...              # Static assets (e.g., favicon)
   ├── src/
   │   ├── components/      # Reusable components (e.g., MovieCard, Carousel, SearchBox)
   │   ├── pages/           # Page components (e.g., Home, MovieDetails, Favorites)
   │   ├── context/         # Context API for global state
   │   ├── styles.css       # Tailwind CSS and custom styles
   │   ├── App.js           # Main app with routing logic
   │   └── index.js         # React entry point
   ├── screenshots/         # Screenshot images for README
   │   ├── homepage-carousel.png
   │   ├── search-box.png
   │   ├── movie-details.png
   │   └── favorites-page.png
   ├── package.json         # Project dependencies and scripts
   └── README.md            # Project documentation
```

## Why This Project?
This app highlights my ability to:
- Build a **production-ready frontend** with React, integrating real-world APIs for browsing and search.
- Create a **responsive, user-friendly UI** with Tailwind CSS, optimized for all devices.
- Implement **scalable state management** using Context API and hooks.
- Deliver a **portfolio piece** tailored for full stack roles, showcasing API integration, routing, and interactivity.

## Contributing
I welcome feedback and contributions! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request with a detailed description.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
I’m eager to connect with recruiters and discuss how my skills can contribute to your team!    
- **Email**: [My-email](mailto:osamaimtiaz677@gmail.com)  
- **LinkedIn**: [My-linkedin-profile](https://www.linkedin.com/in/usama-imtiaz-a2a66721a/)  
Explore the [live demo](https://react-movie-app-rho-peach.vercel.app/) and reach out for collaboration opportunities.

## Acknowledgments
- [TMDB](https://www.themoviedb.org/) for the movie data API.
- [Tailwind CSS](https://tailwindcss.com/) for streamlined styling.
- [React Router](https://reactrouter.com/) for navigation.
- [Vercel](https://vercel.com/) for seamless deployment.
