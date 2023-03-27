/* cara, isso aqui ficou feio */
import { Link } from 'react-router-dom'
import '../styles/posts.css'

const Posts = ({ posts }) => {
    return (
        <section className='posts'>
            <div className='container posts-container'>
                {
                    posts.map((post)=>{
                        return (
                            <div className='post-brief' key={ post.id }>
                                <img src={ post.thumbnail } className='post-brief-image' alt='post thumbnail' /> 

                                <div className='post-brief-description'>
                                    <h2 className='post-brief-title'>{ post.title }</h2>

                                    <Link to={`/posts/${post.slug}`} className='post-brief-anchor'>
                                        leia mais
                                    </Link>
                                    
                                    {/* categories */}
                                    <div className='post-brief-categories'>
                                        {
                                            post.categories.map((category)=>{
                                                return (
                                                    <span key={ category.id } className='category'> 
                                                        { category.title }
                                                    </span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Posts;
