import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import Loading from '../templates/Loading'
import ErrorMessage from '../templates/ErrorMessage'
import useFetch from '../hooks/useFetch'
import '../styles/album_detail.css'

const AlbumDetail = () => {
    const { slug } = useParams();

    const {
        data: album, 
        isPeding, 
        error
    } = useFetch(`${process.env.REACT_APP_ALBUMS_ENDPOINT}/${slug}`)

    return (
        <>
            {/* building navbar */}
            <Navbar />

            { error && <>
                <ErrorMessage message={error}/>
            </>}

            { isPeding && <>
                <Loading />
            </>}



            { album && <>
                <section className='album-detail'>
                    <div className='container album-detail-container'>
                        <div className='album-detail-apresentation'>
                            <h1 className='album-detail-title'>{ album.name }</h1>
                            <img src={ album.thumbnail } className='album-detail-thumbnail' alt="album thumbail"/>
                        </div>

                        <div className="album-images-container">
                        {
                            album.images.map((image) => {
                                return (
                                        <div className='album-image-container' key={ image.id }>
                                            <Link to={ image.source } target='blank_'>
                                                <img src={ image.source } className='album-image' alt="Album element"/>
                                            </Link>

                                            <div className='image-description'>
                                                <h2 className='album-image-title'>{ image.title }</h2>
                                            </div>
                                        </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </section>
            </> }

            {!isPeding && <Footer/>}
        </>
    )
}

export default AlbumDetail;
