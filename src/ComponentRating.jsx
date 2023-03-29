import React from "react";
import './ComponentRating.css';

function ComponentRating(){
    return(
        <>
            <div className="container">
                <div className="ratingBox">
                    <div className="imgBox">
                        <img src="icon-star.svg" alt=""></img>
                    </div>

                    <div className="ratingMsg">
                        <h2>How did we do?</h2>
                        Please let us know how we did with your support request. All feedback is appreciated 
                        to help us improve our offering!                  
                    </div>

                    <div className="nbrContainer">
                        <div className="nbrBox">1</div>
                        <div className="nbrBox">2</div>
                        <div className="nbrBox">3</div>
                        <div className="nbrBox">4</div>
                        <div className="nbrBox">5</div>
                    </div>

                    <div className="btnSubmit">
                        Submit
                    </div>

                </div>
            </div>
        </>
    )
}
export default ComponentRating;