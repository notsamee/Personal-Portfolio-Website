import './Header.css';

function Header() {
    return(
        <header className='project-header'>
            <nav>
                <ul>
                    <li className="samee"><a className='samee-a' href="/">{"<Samee/>"}</a></li>
                    <li className="right"><a href="/">Home</a></li>
                    <li className="right"><a href="https://github.com/samee-hanif/sorting-algorithm-visualizer" target='_blank'>GitHub</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header