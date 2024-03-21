import MoviesListBox from "./MoviesListBox";
import WatchedMoviesListBox from "./WatchedMoviesListBox";

export default function Main({movies}) {
    return <main className="main">
        <MoviesListBox movies={movies}/>
        <WatchedMoviesListBox/>
    </main>;
}