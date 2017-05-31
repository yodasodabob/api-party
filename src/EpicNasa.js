import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import AsteroidPicture from './AsteroidPicture'

class EpicNasa extends Component {
    state = {
        date:''
    }

    handleChange = (ev) => {
        const date = ev.currentTarget.value
        this.setState({ date })
    }

     handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/epicnasa/${this.state.date}`)
    }

    render() {
        return(
            <div className='epicnasa'>
                <img className="nasa-logo" src="https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png" alt="nasa" />

                <h2>Enter a date</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="date"
                            className="epicnasa"
                            value={this.state.date}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type='submit'>Find EPIC image</button>
                    </div>
                </form>
                
                <Route exact path='/epicnasa' render={() => (
                    <h3>Please enter a date to find an image for</h3> 
                )} />
                <Route path='/epicnasa/:date' component={AsteroidPicture} />
            </div>
        )
    }
}

export default EpicNasa