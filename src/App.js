import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "med amin meddeb",
      bio: "mmmmmmmm",
      imgSrc: "",
      profession: "student",
    },
    show: true,
  };

  handleClick = () => this.setState({ show: !this.state.show });

  render() {
    const { person, show } = this.state;
    console.log(show);
    return (
      <div>
        {show && (
          <>
            <div>{person.fullName}</div>
            <div>{person.bio}</div>
            <div>{person.imgSrc}</div>
            <div>{person.profession}</div>
          </>
        )}
        <button onClick={this.handleClick}>Toggle Profile</button>
      </div>
    );
  }
}

export default App;
