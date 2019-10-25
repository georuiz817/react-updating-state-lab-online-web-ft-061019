// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor(){
        super()

        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    handleBitrate = () => {
        let newBitrate = {
            ...this.state.settings,
            bitrate: 12
        }
        this.setState({
            settings: newBitrate
        })
    }

    handleResolution = () => {
        let newResolution = {
            ...this.state.settings,
            video: {
                ...this.state.settings.video,
                resolution: '720p'
            }
        }
        this.setState({
            settings: newResolution
        })
    }


    render() {
        return (
            <div>
            <button className='bitrate' onClick={this.handleBitrate}>Bitrate</button>
            <button className='resolution' onClick={this.handleResolution}>Resolution</button>
            </div>
        )
    }

}