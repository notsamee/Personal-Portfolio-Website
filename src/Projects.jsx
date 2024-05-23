import './Projects.css'

function Projects() {
    return(
        <section id="projects">
            <h1 className='projects-header'>Projects</h1>
            <div className='cards'>
                <div className='card'>
                    <h2 className='projects-subheader'>Sorting Algorithm Visualizer</h2>
                    <div className='projects-img-container'><img className='sorting-img' src='/sorting-visualizer.png'></img></div>
                    <p className='projects-img-description'>Randomized array represented with bars</p>
                    <ul className='projects-list'>
                        <li className='projects-text'>Developed an interactive sorting algorithm visualizer with <b>React.js</b>.</li>
                        <li className='projects-text'>Implemented dynamic bar elements and <b>real-time animations</b> for <b>bubble sort, insertion sort, merge sort, and quick sort</b>.</li>
                        <li className='projects-text'>Utilized <b>React state management</b> for visual updates, highlighting comparisons and swaps.</li>
                        <li className='projects-text'>Designed a <b>user-friendly interface</b> with controls for sorting, adjusting speed, and resetting visualizations.</li>
                    </ul>
                </div>
                <div className='card'>
                    <h2 className='projects-subheader'>Banking Application Demo</h2>
                    <div className='projects-img-container'><img className='banking-img' src='/banking-db.png'></img></div>
                    <p className='projects-img-description'>SQL database table of the users information</p>
                    <ul className='projects-list'>
                        <li className='projects-text'>Spearheaded the development of a <b>collaborative Java banking application</b>, emphasizing teamwork.</li>
                        <li className='projects-text'>Utilized <b>Object-Oriented Programming</b> principles for a modular, flexible, and scalable architecture.</li>
                        <li className='projects-text'>Engineered a robust <b>SQLite database system</b> for efficient user profile, account, and transaction management.</li>
                        <li className='projects-text'>Enhanced security with <b>email verification</b>, <b>SHA-256 hashing</b> for passwords, ensuring data integrity.</li>
                    </ul>
                </div>
                <div className='card'>
                    <h2 className='projects-subheader'>Arduino Distance Sensor</h2>
                    <div className='projects-img-container'><img className='arduino-img' src='https://projects.arduinocontent.cc/1000abc3-a2c0-4c8b-ab31-2f8069ac8389.png'></img></div>
                    <p className='projects-img-description'>Circuitry of the main components</p>
                    <ul className='projects-list'>
                        <li className='projects-text'>Developed distance measurement capabilities using <b>C/C++</b> on an <b>Arduino UNO R3</b>, focusing on precision.</li>
                        <li className='projects-text'>Integrated an <b>Ultrasonic Distance Sensor</b> with an <b>LCD</b> for <b>real-time distance</b> display.</li>
                        <li className='projects-text'>Ensured <b>simultaneous functionality</b> by interconnecting components via a breadboard.</li>
                        <li className='projects-text'>Showcased seamless <b>hardware-software fusion</b> in an embedded systems project, emphasizing practical application.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Projects