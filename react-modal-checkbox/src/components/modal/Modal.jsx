import React from 'react'
import './modal.css'

export default class Modal extends React.Component {
  state = {
    isOpen: false,
  }

  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ isOpen: true })}
        >
          Open modal
        </button>

        {this.state.isOpen && (
          <div className="modalR">
            <div className="modal-body">
              <h1>Modal title</h1>
              <p>I am modal !</p>
              <button
                className="btn btn-primary"
                onClick={() => this.setState({ isOpen: false })}
              >
                Close modal
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}
