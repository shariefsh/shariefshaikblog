import React from 'react'
import './work.css'
import cyient from '../../assets/cyient.jpg'
import aum from '../../assets/aum.jpg'

const Work = () => {
    return (
        <section id='work'>
            <br />
            <br />
            <h2>Work History</h2>
            <div className='container work__container'>
                <div className='work__content'>
                    <article className="work__card">
                        <div className='work__image'>
                            <img src={cyient} alt="About Image" />
                        </div>
                        <div className='work__card_details'>
                            <h4>Cyient Ltd</h4>
                            <h6>Hyderabad, India</h6>
                            <h5>Sr. Software Engineer</h5>
                            <h6>Sep 15, 2017 - Aug 24, 2021</h6>
                        </div>

                    </article>

                    <article className="work__card">
                        <div className='work__image'>
                            <img src={aum} alt="About Image" />
                        </div>
                        <div className='work__card_details'>
                            <h4>Auburn University at Montgomery</h4>
                            <h6>Montgomery, AL</h6>
                            <h5>Graduate Teaching Assistant</h5>
                        </div>

                    </article>
                </div>
            </div>
        </section>
    )
}

export default Work