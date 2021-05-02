import React, { Component } from 'react'
import YouTubeComp from '../../../components/YouTubeComp/YouTubeComp'

class YouTubeCompPage extends Component{
    render() {
        return (
            <>
                <p>YouTube Component</p>
                <hr/>
            <YouTubeComp title="Hello react js" desc="100x ditonton. 5hari" time="80.12" />
            <YouTubeComp title="Hello react js 1" desc="50x ditonton. 2hari" time="07.12" />
                <YouTubeComp title="Hello react js" desc="200x ditonton. 3hari" time="02.32" />
            <YouTubeComp title="Title here" desc="Desc here" time="00.00" />
                
                
            </>
        )
    }
}


export default YouTubeCompPage;