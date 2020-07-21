import React, { Component } from 'react'
import Hero from './Hero'
import GameDisplay from './GameDisplay'

export default class HomePage extends Component {
  state = {
    games: []
  }

  componentDidMount() {
    fetch(`https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&pretty=true&client_id=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => this.setState({ games: data.games }))
  }

  handleSearch = title => {
    console.log(title)
  }

  render() {
    return (
      <div className="home-page" >
        <Hero handleSearch={this.handleSearch} />
      </div>
    )
  }
}