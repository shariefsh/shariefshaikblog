import React from 'react'
import {BsFillAwardFill} from 'react-icons/bs'
import './education.css'

const Education = () => {
  return (
    <section id='education'>
        <h2>Education History</h2>
        <div className='container edu__container'>
            <div className='edu__cards'>
            <article className="edu__card">
              <BsFillAwardFill className='about__icon' />
              <div className='edu__details'>
                <h6>2022</h6>
                <h3>Masters in Computer Sceince</h3>
                <h5>Auburn University at Montgomery</h5>
              </div>
            </article>
            
            <article className="edu__card">
              <BsFillAwardFill className='about__icon' />
              <div className='edu__details'>
                <h6>2017</h6>
                <h3>Bachelors in Information Technology</h3>
                <h5>VR Siddhartha Engineering College</h5>
              </div>
            </article>
            <article className="edu__card">
              <BsFillAwardFill className='about__icon' />
              <div className='edu__details'>
                <h6>2013</h6>
                <h3>Higher Secondary Certificate</h3>
                <h5>Sri Chaitanya Jr College</h5>
              </div>
            </article>
            <article className="edu__card">
              <BsFillAwardFill className='about__icon' />
              <div className='edu__details'>
                <h6>2011</h6>
                <h3>Secondary School Certificate</h3>
                <h5>ZPH School</h5>
              </div>
            </article>
            </div>

        </div>
    </section>
  )
}

export default Education