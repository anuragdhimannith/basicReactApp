import React, { Component } from 'react';
import Carousel from "./Carousel";
import TimeUntil from "./TimeUntil";

class Featured extends Component {
    render() {
        return (
            <div style = {{position: 'relative'}}>
               <Carousel/>
                <div className = "artist_name">
                    <div className = 'wrapper'>
                      The Dark Knight
                    </div>
                </div>
                <TimeUntil/>
            </div>
        );
    }
}

export default Featured;