import './Header.css';

function Header() {
    return(
        <header className='header'>
            <nav>
                <ul>
                    <li className="samee"><a className='samee-a' href="/#home">{"<Samee />"}</a></li>
                    <li className="right"><a href="/#about">About</a></li>
                    <li className="right"><a href="/#projects">Projects</a></li>
                    <li className="right"><a href="/#skills">Skills</a></li>
                    <li className="right"><a href="/#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header