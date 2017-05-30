import React, { Component } from 'react'

class GithubUser extends Component {
    state={
        user: {
            avatar_url: '',
            login: '',
            followers: '',
            following:'',
            location: '',
            html_url: '',
        }
    }

    constructor(props) {
        super(props)
        this.fetchUserData()

    }

    fetchUserData() {
        fetch(`https://api.github.com/users/${this.props.match.params.username}`)
            .then(response => response.json())
            .then(user => this.setState({ user }))
    }

    render() {
        return(
            <h3>Great Jaerb, you serached for {this.props.match.params.username}</h3>
        )
    }
}

export default GithubUser