import Extra from '../templates/Extra'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import ErrorMessage from '../templates/ErrorMessage'
import Loading from '../templates/Loading'
import Posts from '../templates/Posts'
import useFetch from '../hooks/useFetch'

const PostList = () => {
    const {data: posts, isPeding, error} = useFetch(process.env.REACT_APP_POSTS_ENDPOINT)

    return (
        <>
            <Navbar />

            {error && <>
                <ErrorMessage message={error} />
            </>}
            
            {isPeding && <>
                <Loading />
            </>}

            {posts && <>
                <Posts posts={posts}/>
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

export default PostList
