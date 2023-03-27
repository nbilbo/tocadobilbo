import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ErrorMessage from '../templates/ErrorMessage'
import Extra from '../templates/Extra'
import Footer from '../templates/Footer'
import Loading from '../templates/Loading'
import Navbar from '../templates/Navbar'
import '../styles/post_detail.css'

const PostDetail = () => {
    const { slug } = useParams()

    const {
        data: post, 
        isPeding, 
        error
    } = useFetch(process.env.REACT_APP_POSTS_ENDPOINT + slug)

    const richText = (postagem) => {
        let postagemHtml = {__html: postagem};

        return (
            <div className='rich-text' dangerouslySetInnerHTML={postagemHtml}></div>
        )
    }

    return (
        <>
            <Navbar />

            {error && <>
                <ErrorMessage message={error} />
            </>}

            {isPeding && <>
                <Loading />
            </>}

            {post && <>
                <article className='post-detail'>
                    <div className='container post-detail-container'>
                        <div className='post-detail-apresentation'>
                            <div className='post-detail-description'>
                                <h1 className='post-detail-title'>{ post.title }</h1>
                                <p className='post-detail-author'>Escrito por: {post.author}</p>
                            </div>
                            <img src={ post.thumbnail} className='post-detail-thumbnail' alt={ post.title } />
                        </div>
                        {richText(post.content)}
                    </div>
                </article>
            </>}

            {!isPeding && <Extra />}

            {!isPeding && <Footer/>}

        </>
    )
}

export default PostDetail;
