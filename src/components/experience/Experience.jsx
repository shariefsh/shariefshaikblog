import React from 'react'
import './experience.css'
import { HiCheckCircle } from 'react-icons/hi'

const Experience = () => {
  return (
    <section id='experience'>
      <br />
      <br />
      <h5>Technologies I've worked with</h5>
      <h2>Experience</h2>
      

      <div className='container skills__container'>
        <div className='skills__frontend'>
          <h3>Frontend Development</h3>
          <div className='skills__content'>
            <article className='skills__details'>
              <HiCheckCircle className='skills__details_icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <HiCheckCircle className='skills__details_icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermadiate</small>
              </div>
            </article>
            <article className='skills__details'>
              <HiCheckCircle className='skills__details_icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <HiCheckCircle className='skills__details_icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermadiate</small>
              </div>
            </article>
            <article className='skills__details'>
              <HiCheckCircle className='skills__details_icon' />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <HiCheckCircle className='skills__details_icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>


        </div>
        <div className='skills__backend'>
          <h3>Backend Development</h3>
          <div className='skills__content'>
            <article className='skills__details'>
              <HiCheckCircle className='skills__details_icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <HiCheckCircle className='skills__details_icon' />
              <div>
                <h4>MS SQL Server</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <HiCheckCircle className='skills__details_icon' />
              <div>
                <h4>C#</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <HiCheckCircle className='skills__details_icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <HiCheckCircle className='skills__details_icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills__details'>
              <HiCheckCircle className='skills__details_icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Experience