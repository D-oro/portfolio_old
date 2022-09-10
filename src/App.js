import './App.css';
import apple from './images/apple.png'
import portrait from './images/portrait.png'
import berries from './images/berries.png'
import sky from './images/sky.png'
import flower from './images/flower.png'

function App() {
  return (
    <div className="App">

      <header>
        <div id="square"><img src={portrait} id="portrait" alt="portrait of author"/></div>
        <text id="headertext">Portfolio Doro Hinrichs</text>
      </header>

      <main>
        <article id="maintext">Psychologist graduate turned Junior Software Developer through 16 week intensive coding bootcamp with CodeClan from July-October 2022.</article>
        <img src={flower} id="picture" alt="an apple on a tree"/>
        <aside id="aside">
          Proficient in:
          <ul>
            <li>Python</li>
            <li>Javascript</li>
            <li>Java</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>React</li>
          </ul>
          </aside>
      </main>

      <footer>
        Github
        LinkedIn
      </footer>
    
    </div>
  );
}

export default App;
