import Extra from '../templates/Extra'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import Loading from '../templates/Loading'
import ErrrorMessage from '../templates/ErrorMessage'
import Albums from '../templates/Albums'
import useFetch from '../hooks/useFetch'

const AlbumList = () => {
    const {data: albums, isPeding, error} = useFetch(process.env.REACT_APP_ALBUMS_ENDPOINT)

    return (
        <>
            <Navbar />

            {error && <>
                <ErrrorMessage message={error} />
            </>}

            {isPeding && <>
               <Loading /> 
            </>}

            {albums && <>
                <Albums albums={albums}/>
            </>}

            {!isPeding && <>
                <Extra />
            </>}

            {!isPeding && <>
                <Footer />
            </>}


        </>
    )
}

export default AlbumList;
