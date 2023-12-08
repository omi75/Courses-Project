import React, { useState } from 'react'
import Card from './Card'

function Cards({courses,category}) {
    let allCourse=[];
    const[liked,setLiked]=useState([]);
    // return array of values in api object
    const getCourses=()=>{
        if(category==="All")
        {
            Object.values(courses).forEach((courseCat)=>{
                courseCat.forEach(course=>{
                    allCourse.push(course);
                })
            })
            return allCourse;
        }
        else 
        {
            return courses[category];
        }

     }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourses().map((course)=>{
                return(<Card key={course.id} course={course} liked={liked} setLiked={setLiked}/>)
            })
        }
    </div>
  )
}

export default Cards