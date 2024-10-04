import React from "react";
import './Cards.css'
import { TiTick } from "react-icons/ti";
import { IoCalendarClearOutline } from "react-icons/io5";
import logo from './pmc.webp';


const Cards = ({prodlist}) => {
    const renderList = () => {
        if(prodlist){
            return prodlist.map((data)=> {
                return(
                    <>
                    <div className="flex flex-row">
                    <div className=" w-25 mt-4" style={{ borderRadius: '15px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)' }} >
        <div className="">
            <img src={logo} className="w-100" style={{ borderRadius: '15px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)' }}/>
        </div>
        <div className="p-3">
        <div className="">
            <h5 className="">{data.heading} </h5>
            <div className="d-flex align-items-center mb-1">
            <TiTick className="me-2 text-primary" /><p className="font-size fw-normal mb-0"> {data.data1}</p>
            </div>
            <div className="d-flex align-items-top mb-3">
            <TiTick className="me-2 text-primary" /><p className="font-size fw-normal"> {data.data2}</p>
            </div>
        </div>
          <div className="d-flex flex-column ">
          <span className="font-size fw-normal"> <IoCalendarClearOutline className="me-2" />{data.duration}</span>
            <div className=" d-flex align-items-center">
                
                <span className=" font-size fw-normal me-4">{data.start} <b>{data.date}</b></span>
                <a href="">Know More</a>
            </div>
          
          </div>
        </div>

    </div>
                    </div>
    <div className="bg-primary text-warning w-10"><h1>hi</h1></div>
    </>
                )
            })
        }
    }
    return(
        <div className=''>
            <div className=''>
                {renderList()}
            </div>
        </div>
    );
}

export default Cards;