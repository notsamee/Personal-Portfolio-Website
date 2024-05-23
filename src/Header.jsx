import './Header.css';

function Header() {
    return(
        <header>
            <nav>
                <ul>
                    <li className="samee"><a href="#home">{"<Samee />"}</a></li>
                    <li className="right"><a href="#about">About</a></li>
                    <li className="right"><a href="#projects">Projects</a></li>
                    <li className="right"><a href="#skills">Skills</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header