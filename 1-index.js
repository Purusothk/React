import React from "react";
import ReactDOM from "react-dom"
import Head from "./Head"
import Foot from "./Foot"

function Row(){
    return(
        <div>
            <Head />
            <h1> Reason why i learn react </h1>
            <ol className="jss">
                <li>Popular library</li>
                <li>Easy for developers</li>
            </ol>
            <Foot />
        </div>
    )
}

 

ReactDOM.render(<Row />,document.getElementById("root"));