import React from "react";
import '../YouTubeComp/YouTubeComp.css'

const YouTubeComp = ((props) => {
    return (
        <div className="wrapper-youtube">
                <div className="img-thumb">
                    <img src="https://i.ytimg.com/vi/PudPD_vvvAg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBeS0nIRPTBjKkCi8R2vIEVI9Se9g" alt="img"/>
                    <p className="time">{props.time}</p>
                </div>
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>

            </div>
    )
})

YouTubeComp.defaultProps = {
    title: "Title here",
    time: "00.00",
    desc: "xx ditonton . 1 hari yang lalu "
}

export default YouTubeComp

