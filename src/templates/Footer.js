import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
    return (
        <>
        <footer>
            <div className="footer">
                <div className="row">
                    <Link to="https://www.youtube.com/@noceunaotempao/featured" target='blank_'><i className="fa fa-youtube"></i></Link>
                    <Link to="https://www.linkedin.com/in/lipe-morais/" target='blank_'><i className="fa fa-linkedin"></i></Link>
                    <Link to="https://github.com/nbilbo" target='blank_'><i className="fa fa-github"></i></Link>
                </div>

                <div className="row">
                    Copyright © 2024 Alguns direitos reservados
                </div>
            </div>
        </footer>

        </>
    )
}

export default Footer;
