import "./css/App.css";
import AppRoutes from "./routes/AppRoutes";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";

function App() {
  return ( 
      <MovieProvider>
          <NavBar />
          <main className="main-content">
            <AppRoutes/>
          </main>
        </MovieProvider>
  );
}

export default App;
