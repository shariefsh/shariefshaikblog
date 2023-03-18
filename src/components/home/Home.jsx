import React from 'react'
import './home.css'
import ME from '../../assets/Sharief2.jpg'
import CTA from '../../components/header/CTA'

const Home = () => {
    return (
        <section id='home'>

            {/* <div className='container home__container'>
                <div className='home__content'>
                    <h5>Hello I'm</h5>
                    <h2>Sharief Shaik</h2>
                    <h5 className='text-light'> Fullstack Developer</h5>
                </div>
                <div className='about__me'>
                    <div className='my_image'>
                        <img src={ME} alt='me'></img>
                    </div>
                </div>
            </div> */}

            {/* <CTA /> */}
            {/* <HeaderSocials /> */}

            <div className='container home__container'>


                <div className='home__content'>
                    <h5>Hello, I am</h5>
                    <h2 className='name_h2'>Sharief Shaik</h2>
                    {/* <h5 className='text-light'> Fullstack Developer</h5> */}
                    <p>
                    I'm a Full Stack Developer with 3+ years of experience. I'm proficient in Java, C# for backend development and have expertise in frontend technologies like HTML, CSS, and JavaScript.
                    </p>
                    <CTA />
                </div>
                <div className='about__me'>
                    <img src={ME} alt="About Image" className='my_image' />
                </div>
            </div>

        </section>
    )
}

export default Home