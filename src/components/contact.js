import React, { Component } from "react";

class Contact extends Component {
  state = {
    showCard: false,
  };

  handleClick = (e) => {
    this.setState({
      showCard: !this.state.showCard,
    });
  };

  handleDelete = (e) => {
    this.props.deleteContact();
  };

  render() {
    const { name, email, phone } = this.props.contact;

    return (
      <div className="card mb-3">
        <div className="card-body">
          <h2>
            {name}{" "}
            <i
              style={{ cursor: "pointer" }}
              onClick={this.handleClick}
              className="fas fa-sort-down"
            ></i>
            <i
              style={{ cursor: "pointer", color: "red", float: "right" }}
              onClick={this.handleDelete}
              className="fas fa-times"
            ></i>
          </h2>
          {this.state.showCard ? (
            <ul className="list-group">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Phone: {phone}</li>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Contact;
