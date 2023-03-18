import React from 'react'
import './aboutme.css'
import ME from '../../assets/sharief.jpg'
import { BsFillAwardFill } from 'react-icons/bs'
import { RiFoldersLine } from 'react-icons/ri'

const Aboutme = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className='my_image'>
                    <img src={ME} alt="About Image" />
                </div>
                <div className='content'>
                    <div className="about__cards">
                        <article className="about__card">
                            <BsFillAwardFill className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>

                        <article className="about__card">
                            <RiFoldersLine className='about__icon' />
                            <h5>Projects</h5>
                            <small>5+ Completed</small>
                        </article>
                    </div>
                    <p className='content_text'>
                        I am a recent master's graduate with over three years of experience in C# and Java programming languages. As a passionate and driven software developer, I have worked on a variety of projects to creating web-based solutions. My experience has enabled me to become proficient in both back-end and front-end development, and I have a solid understanding of software development principles and best practices. I am a quick learner, a problem-solver, and a team player, and I am always looking to expand my skillset and take on new challenges.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default Aboutme