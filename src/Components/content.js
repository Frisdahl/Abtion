import React, { Component } from 'react'
import '../sass/main.scss'
//import '~slick-carousel/slick/slick.css'
//import '~slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
// import bedroom from '../assets/bedroom.svg'
// import xp from '../assets/xp.svg'
// https://react-slick.neostack.com/docs/get-started/

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        )
    }
}

/*
export default function Content() {
    return (
        <div class="container1">
            <div class="position-grid">
                <div class="text-position">
                    <h2>The Position</h2>
                    <p>
                        Hey! Yeah, we are happy that we caught your attention.
                        Welcome!
                    </p>
                    <p>&zwj;</p>
                    <p>
                        Abtion is a digital agency. We design and build digital
                        products for others. We are 40 employees, of which
                        roughly 80% of us are programmers. So, as a developer,
                        you will be surrounded by like-minded and given a unique
                        opportunity to learn and grow.
                    </p>
                    <p>&zwj;</p>
                    <p>
                        At Abtion, we focus on delivering value to our clients.
                        Our way of working is heavily inspired by eXtreme
                        Programming. By doing that, our developers get all the
                        necessary context to make the right decisions. We talk
                        daily with our clients and debate solutions in teams.
                    </p>
                    <p>&zwj;</p>
                    <p>
                        At Abtion, you will work with different technologies,
                        teams, and clients. It's OK if you have a preferred
                        technology stack, but you must be ready to expand it.
                    </p>
                </div>
                <div class="svg-container">
                    <img
                        src={bedroom}
                        class="bedroom-svg"
                        alt="bedroom illustration"
                    ></img>
                    <img
                        src={xp}
                        class="xp-svg"
                        alt="eXtreme Programming illustration"
                    ></img>
                </div>
            </div>
            <div class="qualification-grid">
                <div class="text-position">
                    <h2>The Position</h2>
                    <p>
                        Hey! Yeah, we are happy that we caught your attention.
                        Welcome!
                    </p>
                    <p>&zwj;</p>
                    <p>
                        Abtion is a digital agency. We design and build digital
                        products for others. We are 40 employees, of which
                        roughly 80% of us are programmers. So, as a developer,
                        you will be surrounded by like-minded and given a unique
                        opportunity to learn and grow.
                    </p>
                    <p>&zwj;</p>
                    <p>
                        At Abtion, we focus on delivering value to our clients.
                        Our way of working is heavily inspired by eXtreme
                        Programming. By doing that, our developers get all the
                        necessary context to make the right decisions. We talk
                        daily with our clients and debate solutions in teams.
                    </p>
                    <p>&zwj;</p>
                    <p>
                        At Abtion, you will work with different technologies,
                        teams, and clients. It's OK if you have a preferred
                        technology stack, but you must be ready to expand it.
                    </p>
                </div>
                <div class="svg-container">
                    <img
                        src={bedroom}
                        class="bedroom-svg"
                        alt="bedroom illustration"
                    ></img>
                    <img
                        src={xp}
                        class="xp-svg"
                        alt="eXtreme Programming illustration"
                    ></img>
                </div>
            </div>
            <div class="button-alignment">
                <button id="previous" class="previous">
                    Previous
                </button>
                <p>&zwj;</p>
                <button id="next" class="next">
                    Next
                </button>
            </div>
        </div>
    )
}
*/
