import Extra from '../templates/Extra'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import Posts from '../templates/Posts'
import Albums from '../templates/Albums'
import Loading from '../templates/Loading'
import ErrorMessage from '../templates/ErrorMessage'
import useFetch from '../hooks/useFetch'
import '../styles/home.css'


const Home = () => {
    const {
        data: posts, 
        isPeding: postsIsPeding, 
        error: postsError
    } = useFetch(process.env.REACT_APP_POSTS_ENDPOINT)

    const {
        data: albums, 
        isPeding: albumsIsPeding, 
        error: albumsError
    } = useFetch(process.env.REACT_APP_ALBUMS_ENDPOINT)

    return (
        <>
            {/* building navbar */}
            <Navbar />

            
            {/* building main */}
            <main className='main'>
                { postsError && albumsError && <>
                    <ErrorMessage message={postsError | albumsError} />
                </> }

                { postsIsPeding && albumsIsPeding && <>
                    <Loading /> 
                </> }

                {posts && albums && <>
                    <h1 className='main-title'>Ultimas atualizações</h1>
                </>}


                { posts && <> 
                    <Posts posts={ posts.slice(0, 4) }/> 
                </> }

                { albums && <>
                    <Albums albums={ albums.slice(0, 4) }/>
                </> }

            </main>

            { !postsIsPeding && !albumsIsPeding && <Extra /> }

            { !postsIsPeding && !albumsIsPeding && <Footer/> }
        </>
    )
}

export default Home;
