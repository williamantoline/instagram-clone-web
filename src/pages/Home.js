import React, { Component } from 'react'

import Header from 'parts/Header'
// import StoryContainer from 'parts/StoryContainer'

// import stories from "json/stories.json"

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
         return (
            <>
                <Header></Header>
            </>
         )
    }
}