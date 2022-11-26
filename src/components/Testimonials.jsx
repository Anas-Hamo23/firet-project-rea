import { useState } from "react"
import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import Card from "../UI/Card"
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io'
import {testimonials} from '../data'
const Testimonials = () => {
    const [index,setIndex]=useState(0);
    const {name,quote,job,avatar}=testimonials[index];

    const prveTest=()=>{
        setIndex(prve=>prve -1);
        if(index < 0){
            setIndex(testimonials.length-1);
        }
    }
    const nextTest=()=>{
        setIndex(prve=>prve +1);
        if(index>= testimonials.length-1){
            setIndex(0);
        }
    }
  return (
     <section className="testmonials">
        <div className="container testmonials__container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testmonials" className="testmonials__head"/>
            <Card className="testmonial">
                <div className="testmonial__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className="testmonial__quote">
                    {`"${quote}"`}
                </p>
                <h5>{name}</h5>
                <small className="testmonial__title">{job}</small>
            </Card>
            <div className="testmonials__btn-container">
                <button className="testmonials__btn" onClick={prveTest}><IoIosArrowDropleftCircle/></button>
                <button className="testmonials__btn" onClick={nextTest}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>

     </section>
  )
}

export default Testimonials