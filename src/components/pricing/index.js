import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';
class Pricing extends Component {
    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [`he film reboots the Batman film series, 
        telling the origin story of Bruce Wayne from the death of his parents
         to his journey to become Batman and his fight to stop Ras al Ghul 
         and the Scarecrow from plunging Gotham City into chaos. ... Then, i
         n early 2003, Nolan and Goyer began work on Batman Begins.`],
        linkto: ['https://en.wikipedia.org/wiki/Christopher_Nolan',
            'https://en.wikipedia.org/wiki/Christian_Bale',
            'https://en.wikipedia.org/wiki/Liam_Neeson'],

        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((box, i) => {
            return (
                <Zoom delay={this.state.delay[i]} key={i}>
                    <div className="pricing_item">
                        <div className="pricing_inner_wrapper">
                            <div className="pricing_title">
                                <span>${this.state.prices[i]}</span>
                                <span>${this.state.positions[i]}</span>
                            </div>
                            <div className="pricing_description">
                                {this.state.desc}
                            </div>
                            <div className="pricing_buttons">
                                <MyButton
                                    text="Purchase"
                                    bck="#ffa800"
                                    color="#fffffff"
                                    link={this.state.linkto[i]}
                                />
                            </div>
                        </div>
                    </div>
                </Zoom>
            )
        })
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>

            </div>
        );
    }
}

export default Pricing;

