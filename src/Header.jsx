import './Header.css';

function Header() {
    return(
        <header className='header'>
            <nav>
                <ul>
                    <li className="samee"><a className='samee-a' href="/#home">{"<Samee/>"}</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#skills">Skills</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header