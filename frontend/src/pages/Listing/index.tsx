import axios from "axios";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import { BASE_URL } from "../../utils/requests";

function Listing() {

    // FORMA ERRADA
    axios.get(`${BASE_URL}/movies?size12&page=0`)
        .then(response => {
            console.log(response.data)
        });

    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;