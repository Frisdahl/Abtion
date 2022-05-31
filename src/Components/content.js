import React, { Component } from 'react'
import '../sass/main.scss'
import Slider from 'react-slick'

//Assets
import bedroom from '../assets/bedroom.svg'
import xp from '../assets/xp.svg'
import fourweek from '../assets/4dww.svg'
import laptop from '../assets/laptop.svg'
import angelle from '../assets/angelle.webp'
import coffee from '../assets/coffee.svg'
import pairprog from '../assets/pairprogram.svg'
import talks from '../assets/talks-illu.svg'
// https://react-slick.neostack.com/docs/example/previous-next-methods

export default class PreviousNextMethods extends Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.state = {
            item: 1,
        }
    }

    next() {
        this.setState({ item: this.state.item + 1 })
        this.slider.slickNext()
    }

    previous() {
        this.setState({ item: this.state.item - 1 })
        this.slider.slickPrev()
    }

    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 200,
            slidesToShow: 1,
            slidesToScroll: 1,
        }

        return (
            <div>
                <div>
                    <ol id="prog" className="progress-track">
                        <li
                            className={`${this.state.item >= 1 ? 'green' : ''}`}
                        >
                            <div className="icon-wrap"></div>
                            <span className="progress-text">The position</span>
                        </li>

                        <li
                            className={`${this.state.item >= 2 ? 'green' : ''}`}
                        >
                            <div className="icon-wrap"></div>
                            <span className="progress-text">
                                Qualifications
                            </span>
                        </li>

                        <li
                            className={`${this.state.item >= 3 ? 'green' : ''}`}
                        >
                            <div className="icon-wrap"></div>
                            <span className="progress-text2">
                                Abtion as a workplace
                            </span>
                        </li>

                        <li
                            className={`progress-4 ${
                                this.state.item >= 4 ? 'green' : ''
                            }`}
                        >
                            <div className="icon-wrap2"></div>
                            <span
                                href={this.state.item >= 3}
                                className="progress-text3"
                            >
                                Apply
                            </span>
                        </li>
                    </ol>
                </div>
                <Slider ref={c => (this.slider = c)} {...settings}>
                    <div key={1}>
                        <div className="container1">
                            <div className="position-grid">
                                <div className="text-position">
                                    <h2>The Position</h2>
                                    <p>
                                        Hey! Yeah, we are happy that we caught
                                        your attention. Welcome!
                                    </p>

                                    <p>
                                        Abtion is a digital agency. We design
                                        and build digital products for others.
                                        We are 40 employees, of which roughly
                                        80% of us are programmers. So, as a
                                        developer, you will be surrounded by
                                        like-minded and given a unique
                                        opportunity to learn and grow.
                                    </p>

                                    <p>
                                        At Abtion, we focus on delivering value
                                        to our clients. Our way of working is
                                        heavily inspired by eXtreme Programming.
                                        By doing that, our developers get all
                                        the necessary context to make the right
                                        decisions. We talk daily with our
                                        clients and debate solutions in teams.
                                    </p>

                                    <p>
                                        At Abtion, you will work with different
                                        technologies, teams, and clients. It's
                                        OK if you have a preferred technology
                                        stack, but you must be ready to expand
                                        it.
                                    </p>
                                </div>
                                <div className="svg-container">
                                    <img
                                        src={bedroom}
                                        className="bedroom-svg"
                                        alt="bedroom illustration"
                                    ></img>
                                    <img
                                        src={xp}
                                        className="xp-svg"
                                        alt="eXtreme Programming illustration"
                                    ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div key={2}>
                        <div className="container1">
                            <div className="qualification-grid">
                                <div className="stacks-box grid-column-1">
                                    <h3>
                                        These are our preferred stack and
                                        frames:
                                    </h3>
                                    <ul>
                                        <li>
                                            Our frontend is sometimes a SPA in
                                            React, Vue, or a React Native app.
                                        </li>
                                        <li>
                                            Sometimes, it is backend-generated
                                            in Rails or .NET with sparks of
                                            Javascript.
                                        </li>
                                        <li>
                                            We have backend systems in Ruby on
                                            Rails, .Net (C#), and PHP.
                                        </li>
                                        <li>
                                            We proudly follow TDD and strive for
                                            100% test coverage.
                                        </li>
                                        <li>
                                            We work in pairs and do
                                            pair-programming by default.
                                        </li>
                                        <li>
                                            We host our apps in Heroku and
                                            Azure. Occasionally, we use AWS.
                                        </li>
                                        <li>
                                            We use Github and Github Actions for
                                            the CI.
                                        </li>
                                        <li>
                                            We have green fields projects that
                                            we start from our templates as well
                                            as legacy systems that we
                                            continuously improve.
                                        </li>
                                        <li>
                                            We work under different constraints
                                            on each project. The setup is not
                                            always ideal. We always strive to
                                            make the best out of every
                                            situation.
                                        </li>
                                    </ul>
                                </div>
                                <div className="stacks-box grid-column-2">
                                    <h3>
                                        Here is a list of our expectations to
                                        you:
                                    </h3>
                                    <ul>
                                        <li>
                                            You have experience developing
                                            web-based applications in
                                            Javascript.
                                        </li>
                                        <li>
                                            You have experience with a modern
                                            frontend framework such as React,
                                            Vue, or Angular.
                                        </li>
                                        <li>
                                            You write automatic tests for your
                                            applications and understand the
                                            importance of reliable software.
                                        </li>
                                        <li>
                                            You have experience developing in
                                            the backend. Or perhaps, you don't
                                            have the experience yet but you are
                                            eager to learn.
                                        </li>
                                        <li>
                                            You enjoy finding the right solution
                                            with your team.
                                        </li>
                                        <li>
                                            You understand when to make
                                            compromises and what brings value to
                                            the product.
                                        </li>
                                        <li>
                                            You use a version control system
                                            such as Git.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div key={3}>
                        <div className="container1">
                            <div className="position-grid">
                                <div className="text-position">
                                    <h2>Abtion as a workplace</h2>
                                    <p>
                                        In Abtion, we are all employed on
                                        regular 37-hour contracts and get paid
                                        accordingly—but we only work four days a
                                        week, 30 hours in total from Monday to
                                        Thursday. On Fridays, it is our "job" to
                                        rest and relax (except for five days a
                                        year where we meet for "team day"). You
                                        can learn more about our 4-day work week
                                        here.
                                    </p>

                                    <p>
                                        On Wednesdays, we all work from home. We
                                        call it "Work Away Wednesday." On the
                                        other working days (Monday, Tuesday and
                                        Thursday) we meet at the office. We have
                                        made this arrangement because we care a
                                        lot about our culture and believe that
                                        it thrives best when we meet physically.
                                        At the same time, we also recognize that
                                        working from home offers a special
                                        setting to focus and be productive. By
                                        synchronizing our homework days, we can
                                        get the best of both worlds.
                                    </p>

                                    <p>
                                        Although we take time off every Friday,
                                        we also take holidays, of course. You
                                        get six weeks of vacation a year.
                                    </p>

                                    <p>
                                        We have two offices. One in Copenhagen
                                        and one in Odense, and we are roughly
                                        the same number of people in each
                                        office. You have to decide for yourself
                                        where your desk should stand. In both
                                        offices, you will get a healthy and
                                        delicious lunch, served from the
                                        outside, every day.
                                    </p>

                                    <p>
                                        You can read much more about us at
                                        abtion.com or visit our internal
                                        guidelines at inside.abtion.com
                                    </p>
                                </div>
                                <div className="svg-container">
                                    <img
                                        src={fourweek}
                                        className="bedroom-svg"
                                        alt="bedroom illustration"
                                    ></img>
                                    <img
                                        src={laptop}
                                        className="bedroom-svg"
                                        alt="eXtreme Programming illustration"
                                    ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div key={4}>
                        <div className="container1">
                            <div className="position-grid">
                                <div className="text-position">
                                    <h2>Abtion as a workplace</h2>
                                    <p>
                                        Send your resume to
                                        iwanttowork@abtion.com. We are not
                                        interested in your gender, CPR number,
                                        age, and nationality, nor do we need a
                                        picture of you. We judge you solely on
                                        your competencies and experience.
                                    </p>

                                    <p>
                                        We are pretty thorough with our hiring
                                        process. It is important to us that we
                                        choose our new colleague carefully—just
                                        as it is vital for us to ensure that we
                                        are the right place for you.
                                    </p>

                                    <p>We look forward to receiving your CV.</p>

                                    <p>
                                        If you have any questions, we are happy
                                        to answer.
                                    </p>

                                    <div className="contactperson-container">
                                        <img
                                            src={angelle}
                                            alt="Angelle Peters Chief of Staff"
                                        ></img>
                                        <div>
                                            <h3>Angelle Peters</h3>
                                            <h4>Chief of Staff</h4>

                                            <p>anp@abtion.com</p>
                                            <p>91 97 81 64</p>
                                            <p>København</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="conversations flex-ai-c">
                                    <h3>
                                        Here is the conversations you can expect
                                        to go through:
                                    </h3>
                                    <div>
                                        <img
                                            src={coffee}
                                            className="coffee-svg"
                                            alt="bedroom illustration"
                                        ></img>
                                        <img
                                            src={pairprog}
                                            className="pair-svg"
                                            alt="eXtreme Programming illustration"
                                        ></img>
                                    </div>
                                    <img
                                        src={talks}
                                        className="convos-svg"
                                        alt="eXtreme Programming illustration"
                                    ></img>
                                    <div className="convo-text">
                                        <p>
                                            Informal coffee talk, which
                                            primarily aims to ensure that there
                                            is good chemistry between us.
                                        </p>
                                        <p>
                                            2 x "pairing session", where you, in
                                            close collaboration with two
                                            developers, solve a task.
                                        </p>
                                    </div>
                                    <hr />
                                    <a href="mailto:iwanttowork@abtion.com">
                                        iwanttowork@abtion.com
                                    </a>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                <div>
                    <button
                        disabled={this.state.item <= 1}
                        className="previous"
                        onClick={this.previous}
                    >
                        Previous
                    </button>
                    <button
                        disabled={this.state.item >= 4}
                        className={`next ${
                            this.state.item >= 4 ? 'greenBtn' : ''
                        }`}
                        onClick={this.next}
                    >
                        {`${this.state.item >= 4 ? 'Apply' : 'Next'}`}
                    </button>
                </div>
            </div>
        )
    }
}
