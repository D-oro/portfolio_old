import './App.css';
import portrait from './images/portrait.png'


const HomePage = () => {
    return(
        <>
            <header>Portfolio Doro Hinrichs</header>

            <main>
            <div id="square"><img src={portrait} id="portrait" alt="portrait of author"/></div>

            <article id="maintext">
                <p>Psychology graduate turned Software Developer through 16 week intensive coding bootcamp with CodeClan from July-October 2022.</p>
                <p>Have a look around to find our more about my background, my skillset and the projects that I've worked on. </p>
            </article>
            </main>

            test push

        </>
    )
}

export default HomePage