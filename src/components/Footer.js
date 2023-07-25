// the component function
const Footer = (props) => {

    //The Components Returned JSX
    return <div className="footerContainer"> 

    <footer className="mainFooter">
        <img className="footerImg" src="https://i.imgur.com/TCoUD0X.jpg" alt="proPic"/>
        <div className="topFooter">
            <h3>Isaac Asher - Full Stack Software Engineer</h3>
        </div>
        <div className="inputs">
        <input type="text" placeholder="Enter Your Email"></input> <button>Sign Up</button>   
        </div>
        <div className="socials">
        <ul className="socials">
                    <li><a className="footerSocialLink" href="https://github.com/isaacasher97" rel="noreferrer" target="_blank">My GitHub</a></li>
                    <li><a className="footerSocialLink" href="https://www.linkedin.com/in/isaac-ash/" rel="noreferrer" target="_blank">LinkedIn</a></li>
                </ul>
        </div>
    </footer>   
    </div>
}

// export the component
export default Footer
