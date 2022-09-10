import flower from './images/flower.png'

const MyProjects = () => {
    return(
        <>
            <header>A few projects I've worked on so far:</header>
            <main>
                <p id="text1">
                    <h3>A Gym Membership Management App:</h3>
                    Using Python, flask, sql, html, css and RESTful routing 
                    I built a fully functioning membership app that allows the user 
                    to edit and add members and gym classes to their database,
                    as well as book specific members onto specific gym classes.
                    An additional feature allows the user to highlight certain classes as
                    peak time classes that only premium members can attend. 
                    <h4><a href="https://github.com/D-oro/gym">GitHub Repo</a></h4>
                </p>

                <p id="text1">
                    <h3>A Game Hub Website Group Project:</h3>
                    For our group project, my group and I decided to build a gamehub website. 
                    Using JavaScript, React, NPM, Json, html, css and a lot of creativity
                    we build a fully functioning gamehub website containing chess, checkers, 
                    flappy bird, and candy crush. We started out building a checkers game from
                    scratch, but towards the end decided to add further games that we developed
                    while figuring out how to make the checkers pieces move to the correct places.
                    <h4><a href="https://github.com/GreigK/ReactCheckersTeam">GitHub Repo</a></h4>
                </p>
            </main>

            <footer>
                    ... and this beautiful website of course :)
                    <div id="flower"><img src={flower} id="picture" alt="yellow flower on a meadow"/></div>  
                </footer>
        </>
    )
}

export default MyProjects