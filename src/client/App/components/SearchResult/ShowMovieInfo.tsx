import React  from 'react';
import { Link, useParams } from 'react-router-dom';
import './ShowMovieInfo.scss';
import '../common/Button.scss';
import { useGetMovieQuery } from "../../../../graphql/movies/GetMovie.generated";


const ShowMovieInfo: React.FC = () => {
    const { movieId } = useParams();

    const { data, loading } = useGetMovieQuery({
        variables: {
            id: parseInt(movieId)
        }
    });

    const {
        id,
        title,
        overview: description,
        budget,
        genres = [],
        poster_path: imageURL,
        release_date: releaseDate,
        revenue,
        runtime,
        tagline,
        vote_average: rating,
        // vote_count
    } = data?.movie ?? {};

    return loading ? null : (
        <div className='movie-modal-container'>
            <div className='movie-modal'>
                <div className='movie-modal-header'>
                    <Link to='/' className='search-title'>
                        <h1>Netflixroulette</h1>
                    </Link>
                    <Link to='/'>
                        <button className='button'>Search</button>
                    </Link>
                </div>
                <div className='movie-content-container'>
                    <img className='movie-image' src={imageURL}/>
                    <div className='movie-modal-info'>
                        <div className='movie-content-container'>
                            <h3 className='movie-modal-title'>{title}</h3>
                            <p className='movie-rating'>{rating}</p>
                        </div>
                        <p className='movie-genres'>{genres.join(' ')}</p>
                        <div className='movie-content-container'>
                            <p className='movie-release'>{releaseDate.substring(0, 4)}</p>
                            <p className='movie-runtime'>{runtime} min</p>
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowMovieInfo;
