import loadingImage from '../images/loading.svg'

const Loading = () => {
    return (
        <div className="loading">
           <img
                src={ loadingImage }
                alt="triangle with all three sides equal"
                height="87"
                width="100"
                style={{ display: 'block', margin: '0 auto' }}
            />
        </div>
    )
}

export default Loading;
