import { Link } from 'react-router-dom'
import '../styles/albums.css'

const Albums = ({ albums }) => {
    return (
        <div className='albums'>
            <div className='container albums-container'>
                {
                    albums.map((album) => {
                        return (
                            <div className='album-brief' key={ album.id }>
                                <img src={ album.thumbnail } alt='album thumbnail' className='album-brief-image'/>
                                <div className='album-brief-description'>
                                    <h2 className='album-brief-title'>{ album.title }</h2>
                                    <h3 className='album-brief-about'>{ album.about }</h3>

                                    <Link to={`/albums/${album.slug}`} className='album-brief-anchor'>
                                        conferir album
                                    </Link>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Albums;
