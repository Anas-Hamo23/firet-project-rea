import { useState } from "react"
import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import Card from "../UI/Card"
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io'
import {testimonials} from '../data'
const Testimonials = () => {
    const [index,setIndex]=useState(0);
    const {name,quote,job,avatar}=testimonials[index];
  return (
     <section className="testimonials">
        <div className="container testmonials__container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testmonials"/>
            <Card className="testmonials">
                <div className="testmonials__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className="testmonials__quote">
                    {`"${quote}"`}
                </p>
                <h5>{name}</h5>
                <small className="testmonials__title">{job}</small>
            </Card>
            <div className="testmonials__btn-container">
                <button className="testmonials__btn"><IoIosArrowDropleftCircle/></button>
                <button className="testmonials__btn"><IoIosArrowDroprightCircle/></button>
            </div>
        </div>

     </section>
  )
}

export default Testimonials