import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieProvider } from './context/MovieProvider';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';

const App = () => {
  return (
    <MovieProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:movieName" element={<MoviePage />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}
export default App;
