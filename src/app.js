import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';

class Feedback extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.handleSubmit = this.handleClose.bind(this);
    this.state = {
      name:'',
      email:'',
      message:'',
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit() {
    console.log("Thank you for sharing");
    this.handleClose();
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Feedback
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please provide your valuable feedback</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4> Your name</h4>
            <input type="text" id="namein" />
            <h4>Share your thoughts</h4>
            <textarea />

            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          Click feedback button to share your valuable feedback.
          <Feedback />
        </div>
      );
  }
}

export default App;
