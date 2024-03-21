import MoviesList from "./MoviesList";
import CollapsibleBox from "./CollapsibleBox";

export default function MoviesListBox({movies}) {
    return <CollapsibleBox>
        <MoviesList movies={movies}/>
    </CollapsibleBox>
}