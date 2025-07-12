import React from 'react'
import './../styles/Categories.css'
import smartTv from './../images/tv.jpg'
import vacuumCleaner from './../images/vacuumCleaner.jpg'
import microwaves from './../images/microwaves.jpg'
import plate from './../images/plate.jpg'
import irons from './../images/irons.jpg'

function Categories() {
  return (
    <div className='categories'>
        <h1>Категории</h1>
        <div className="cards">
            <div className="card">
                <img src={smartTv}></img>
                <p>Телевизоры</p>
            </div>
            <div className="card">
                <img src={vacuumCleaner}></img>
                <p>Пылесосы</p>
            </div>
            <div className="card">                
                <img src={microwaves}></img>
                <p>Микроволновки</p>
            </div>
            <div className="card">                
                <img src={plate}></img>
                <p>Плиты</p>
            </div>
            <div className="card">               
                <img src={irons}></img>
                <p>Утюги</p>
            </div>
        </div>
    </div>
  )
}

export default Categories