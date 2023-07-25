// the component function
const Projects = (props) => {

    //The Components Returned JSX
    return <div className="mainContainer">
        <div className="projectCard">
            <div className="profileSidebar">
                <img className="projectImg" src="https://i.imgur.com/mmAsg5f.png" alt="projectImage"></img>
                <ul className="socialLinks">
                    <li className="socialItem"><a className="socialLink" href="https://github.com/isaacasher97/project_1" rel="noreferrer" target="_blank">View The Code On GitHub</a></li>
                    <li className="socialItem"><a className="socialLink" href="https://project-1-inky-gamma.vercel.app/" rel="noreferrer" target="_blank">View The Website</a></li>
                </ul>
            </div>
            {/* Project 2 card */}
            <div className="profileMain">
                <h2 className="profileName">Rider Finder</h2>
                <p className="profilePosition">Project 1 </p>
                <p className="profileBody">
                    Rider Finder is made for Cyclists All over the world. It allows users to input their location & find the nearest public city bikes that they can use. Through the use of a form, Users can choose to search with their Country or City. Enter the name in a text box below that selection, and then search for the nearest public city bikes available for use by pulling the API Data from the Public CityBikes API Documentation and rendering it to the screen once the form is submitted.
                </p>
            </div>
        </div>

        <div className="projectCard">
            <div className="profileSidebar">
                <img className="projectImg" src="https://i.imgur.com/8lhmINa.png" alt="projectImage"></img>
                <ul className="socialLinks">
                    <li className="socialItem"><a className="socialLink" href="https://github.com/isaacasher97/my_ufc_library" rel="noreferrer" target="_blank">View The Code On GitHub</a></li>
                    <li className="socialItem"><a className="socialLink" href="https://my-ufc-library.onrender.com/" rel="noreferrer" target="_blank">View The Website</a></li>
                </ul>
            </div>

            <div className="profileMain">
                <h2 className="profileName">My UFC Library</h2>
                <p className="profilePosition">Project 2 </p>
                <p className="profileBody">
                As a User, You will be able to login to MyUFC Library and view your personal library of ufc fighters, when clicking on any of the fighers, you will be taken to a page that shows attributes relating to each fighter(Name,age,hometown,etc) Fighters can be added, edited & updated as well as deleted from my library. This App is great for anyone who is a fan of UFC as a sport and wants to keep track of their favorite (or least favorite) fighters.
                </p>
            </div>
        </div>
    </div>
}

// export the component
export default Projects;
