import React, { Component } from 'react'
import './AsteroidPicture.css'

class AsteroidPicture extends Component {
    state = {
        asteroidData: {
            imageName:'',
            caption:'',
            date:'',
            imageurl:'',
        }
    }

    apiKey = 'SemEYy9nLnxeSZkk6qnvu9t3HBpF5rFGlPAip7lD'

    constructor(props) {
        super(props)
        this.fetchData(props)
    }

    getRandomInt(min, max) {
        let rmin = Math.ceil(min);
        let rmax = Math.floor(max);
        const randNum = Math.floor(Math.random() * (rmax - rmin + 1)) + rmin;
        console.log(randNum, max)
        return randNum;
    }
    
    fetchData(props) {
        fetch(`https://api.nasa.gov/EPIC/api/enhanced/date/${props.match.params.date}?api_key=${this.apiKey}`)
            .then(response => response.json())
            .then(data => {
                const asteroid = data[this.getRandomInt(0, data.length - 1)]
                const imdate=props.match.params.date
                const asteroidData = {
                    imageName: asteroid.image,
                    caption: asteroid.caption,
                    date: asteroid.date,
                    imageurl: `https://epic.gsfc.nasa.gov/archive/enhanced/${imdate.slice(0,4)}/${imdate.slice(5,7)}/${imdate.slice(8,10)}/jpg/${asteroid.image}.jpg`
                }

                this.setState({ asteroidData })
            })
    }

    render() {
        return(
            <div>
                <h2>Image: {this.state.asteroidData.imageName}.jpg</h2>
                <h2>Taken on: {this.state.asteroidData.date}</h2>
                <img className="asteroid-image" src={this.state.asteroidData.imageurl} alt="asteroidPicture" />
                <h3>{this.state.asteroidData.caption}</h3>
            </div>
        )
    }
}

export default AsteroidPicture

// /props.match.param.date