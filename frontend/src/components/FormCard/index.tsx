import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Movie } from '../../types/movie';
import { BASE_URL } from '../../utils/requests';
import { validateEmail } from '../../utils/validate';
import './styles.css';

type Props = {
    movieId : string;
}

function FormCard( { movieId } : Props) {

    const navigate = useNavigate();

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            });
    }, [movieId]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault(); // impede que o formulário seja enviado

        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;
        
        console.log(email + " - " + score)

        if (!validateEmail(email)){
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: movieId,
                score: score
            }
        }

        axios(config).then(response => {
            console.log(response.data);
            navigate("/");
        })
    }
    return (
        <div className="aflmovie-form-container">
            <img className="aflmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="aflmovie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="aflmovie-form" onSubmit={handleSubmit}>
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