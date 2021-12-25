import React from 'react'

const CourseItem = ({course}) =>(
    <div> 
        <h2 
        onClick={() => console.log(course.title)} style={{color: "red"}}>
            {course.title}</h2>
        <p > {course.description}</p>
        <img src={course.thumbnail_cdn} />
        
    </div>
)
export default CourseItem;
