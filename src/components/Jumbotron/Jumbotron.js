import React from 'react'
import './jumbotron.css'
function Jumbotron() {
    return (
        <>


            <div class="jumbotron jumbotron-fluid">
            
                <div class="container">

               <img src={require('../../images/mike.jpg')} class="rounded-circle mx-auto d-block" alt="Mike"/>
           
           <br></br>
                    <p>Hello! My name is Michael Garringer. I am an aspiring Web Developer based out of Austin, TX. I am experienced in Javascript, HTML and CSS, with a creative approach to problem solving and a perseverance when dealing with adversity. Aside from the technical aspects, I have over 5 years experience in customer service, with an emphasis in face-to-face customer relations and a history of managing others. I am a detail oriented people person who is willing to go the extra mile to ensure the customer is fully satisfied.</p>
                </div>
            </div>
        </>
    )
}

export default Jumbotron