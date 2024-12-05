import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import Albums from '../templates/Albums'
import Loading from '../templates/Loading'
import ErrorMessage from '../templates/ErrorMessage'
import useFetch from '../hooks/useFetch'
import '../styles/home.css'


const Home = () => {
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
                { albumsError && <>
                    <ErrorMessage message={albumsError} />
                </> }

                { albumsIsPeding && <>
                    <Loading /> 
                </> }

                {albums && <>
                    <h1 className='main-title'>Ultimas atualizações</h1>
                </>}


                { albums && <>
                    <Albums albums={ albums }/>
                </> }

            </main>

            {  !albumsIsPeding && <Footer/> }
        </>
    )
}

export default Home;
