import './Footer.css'

function Footer() {
    return(
        <footer>
            <div className='footer-container'>
                <h1 className='footer-header'>Get In Touch</h1>
                <p className='footer-text'>I'm currently looking for any Software Engineering internship opportunities! If you know of any available positions, want to get in touch, or have any questions, feel free to reach out to me at,<a href="mailto:samee.hanif@torontomu.ca">samee.hanif@torontomu.ca</a></p>
                <p>Made with React<img src='/react.svg' className='react-img' width='20' height='20'></img> by Samee Hanif</p>
                <p className='copyright'>&copy; {new Date().getFullYear()} Samee Hanif's Portfolio</p>
            </div>
        </footer>
    );
}

export default Footer