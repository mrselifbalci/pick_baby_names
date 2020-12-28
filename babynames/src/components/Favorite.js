import React, { Component } from "react";

export default class Favorite extends Component {
  render() {
    return (
      <div>
        <p style={{ color: "grey" }}>
          Favorites:Click some names below to add to your shortlist...{this.props.favoriteNames}
        </p>

        <hr style={{ width: "95%" }} />
      </div>
    );
  }
}
