import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result"> {this.props.count} Products</div>
        <div className="filter-sort">
          Order
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option>Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-type">
          Filter
          <select value={this.props.type} onChange={this.props.filterProducts}>
            <option value="All">All</option>
            <option value="Pre-Rolls">Pre-Rolls</option>
            <option value="8th Bag">8th Bag</option>
            <option value="pod">Pods</option>
            <option value="Batteries">Batteries</option>
            <option value="Munchies">Munchies</option>
            <option value="Accesories">Accesories</option>
            <option value="Drinks">Drinks</option>
          </select>
        </div>
      </div>
    );
  }
}
