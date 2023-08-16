import "./App.css";
import { Provider } from "react-redux";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import store from "./store";
import Movies from "./components/movies";
import MovieDetails from "./components/movieDetails";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movieDetails" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
