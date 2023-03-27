import { Link } from 'react-router-dom'
import blogImage from '../images/blog.png'
import albumImage from '../images/album.png'
import '../styles/extra.css'

const Extra = () => {
    return (
        <section className='extra'>
            <div className='extra-item'> 
                <Link to='/posts/' className='extra-anchor'>
                <img className='extra-image' src={blogImage} alt='blog representation'/>
                <h2 className='extra-title'>Leia nossas postagens</h2>
                </Link>
            </div>

            <div className='extra-item'> 
                <Link to='/albums/' className='extra-anchor'>
                <img className='extra-image' src={albumImage} alt='blog representation'/>
                <h2 className='extra-title'>Veja nossos albuns</h2>
                </Link>
            </div>
        </section>
    )
}

export default Extra