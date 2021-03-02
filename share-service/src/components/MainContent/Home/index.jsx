import React from 'react'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      }
    })
  }

  render() {
    return (
      <div>
        <h2>This is Home</h2>
        <div>
          <button onClick={this.handleClick}>Click !</button>
          <span>{this.state.count}</span>
        </div>
      </div>
    )
  }
}
