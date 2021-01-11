import React from 'react';

function Resume() {
    return(
        <div>
            <h1>
                <a className="resume" href='/resume.pdf' download>Click Here to Download My Resume</a>
            </h1>
            <h3>My Proficiencies</h3>
                <ul>
                    <li className="proficiencies">
                        HTML
                    </li>
                    <li className="proficiencies">
                        CSS
                    </li>
                    <li className="proficiencies">
                        Javascript
                    </li>
                    <li className="proficiencies">
                        Node.js
                    </li>
                    <li className="proficiencies">
                        HandleBars
                    </li>
                </ul>
        </div>
    )
}

export default Resume;