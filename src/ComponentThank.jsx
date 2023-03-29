import React from "react";
import './ComponentThank.css';

function ComponentThank(){
    return(
        <>
            <div className="container">
                <div className="thankBox">                    
                     <div className="imgThankBox">
                        <img src="illustration-thank-you.svg"></img>
                     </div>
                        
                     <div className="btnSelect">
                        You selected out of 5
                     </div>
                        
                     <div className="thankMsg">
                        <h2> Thank you!</h2>                       
                         <p>We appreciate you taking the time to give a rating. If you ever need more support, 
                            don’t hesitate to get in touch! </p>                
                     </div>                    

                </div>
            </div>
        </>
    )
}
export default ComponentThank;