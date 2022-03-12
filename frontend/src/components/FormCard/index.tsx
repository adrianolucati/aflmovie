import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../types/movie';
import { BASE_URL } from '../../utils/requests';
import './styles.css';

type Props = {
    movieId : string;
}

function FormCard( { movieId } : Props) {

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            });
    }, [movieId]);
    return (
        <div className="aflmovie-form-container">
            <img className="aflmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="aflmovie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="dsmovie-form">
                    <div className="form-group aflmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group aflmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="aflmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary aflmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                    <button className="btn btn-primary aflmovie-btn mt-3">Cancelar</button>    
                </Link>
                
            </div >
        </div >
    );
}

export default FormCard;