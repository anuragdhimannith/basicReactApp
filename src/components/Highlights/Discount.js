import React, { Component } from 'react';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart+1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.percentage()
        },30)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                      onReveal = {() => this.percentage()}
                    >
                    <div className="discount_percentage">
                        <span> {this.state.discountStart}%</span>
                        <span> OFF</span>
                    </div>
                    </Fade>
                    <Slide right>
                    <div className="discount_description">
                        <h3> Purchase tickets before it ends.</h3>
                        <p> Gotham is an origin story of the great DC Comics Super-Villains and vigilantes,
                        revealing an entirely new chapter that has never been told. It follows one cop's rise through a dangerously corrupt city teetering between good and evil,
                        and chronicles the birth of one of the most popular super heroes of our time.
                        </p>
                        <MyButton
                        text = "Purchase"
                        bck = "#ffa800"
                        color = "#fffffff"
                        link = 'https://www.google.com/'
                        />
                    </div>
                    </Slide>
                   
                </div>

            </div>
        );
    }
}

export default Discount;