import Logo from "./Logo";
import Search from "./Search";
import NumResults from "./NumResults";

export default function NavigationBar({movies}) {
    return <nav className="nav-bar">
        <Logo/>
        <Search/>
        <NumResults movies={movies}/>
    </nav>;
}