import sadImage from '../images/sad.webp'
import '../styles/error.css'

const ErrorMessage = ({ message }) => {
    return (
        <div className='error'>
            <div className='container error-container'>
                <img src={ sadImage } alt='error thumbnail' className='error-image'  />
                <h1 className='error-title'>
                    { message }
                </h1>
            </div>
        </div>
    )
}

export default ErrorMessage;
