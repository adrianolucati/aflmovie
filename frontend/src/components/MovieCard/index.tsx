import { Link } from "react-router-dom";
import { Movie } from "../../types/movie";
import MovieScore from "../MovieScore";

type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props) {

    return (
        <div>
            <img className="aflmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="aflmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore count={movie.count} score={movie.score} />

                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary aflmovie-btn">Avaliar</div>
                </Link>
                
            </div>
        </div>
    )
}

export default MovieCard