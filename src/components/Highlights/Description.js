import React, { Component } from 'react';
import Fade from "react-reveal/Fade";
class Description extends Component {
    render() {
        return (
            <Fade>
                <div className="center_wrapper">
                    <h2> Highlights </h2>
                    <div className="highlight_description">
                        Batman is the superhero protector of Gotham City,
                        a tortured, brooding vigilante dressed as a sort of human bat who fights against evil and strikes fear into the hearts of criminals everywhere.
                        In his public identity he is Bruce Wayne, billionaire industrialist and notorious playboy.
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Description;