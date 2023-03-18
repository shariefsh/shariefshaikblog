import React from 'react'
import './about.css'
//import ME from '../../assets/me-about.jpg'
import ME from '../../assets/sharief.jpg'
import { MdOutlineWorkHistory } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <br />
      <br />
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className="about__card">
              <MdOutlineWorkHistory className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              {/* <FaGithub className='about__icon' /> */}
              <a href='https://linkedin.com/in/sharief-shaik-a324a7b8' className='social__icons' target='_blank'><BsLinkedin /></a>
              <a href='https://github.com/shariefsh' className='social__icons' target='_blank'><FaGithub /></a>
              <h5>Socials</h5>
            </article>
          </div>
          <p>
          I was born and raised in India, and I completed my Master's degree in Computer Science from Auburn University at Montgomery in December 2022. My passion for technology and innovation has driven me to seek out new experiences, whether it's through travel, adventure or learning. I enjoy challenging myself to learn and grow both personally and professionally. I love to meet new people and learn about other cultures and ways of life. I am a quick learner, a problem-solver, and a team player, and I am always looking to expand my skillset and take on new challenges.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About