import React, { Component } from 'react';

export default class Index extends Component {
  constructor() {
    super();

    this.state = {
      inputText: '',
      productsArray: [],
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleAddButton = () => {
    const { inputText, productsArray } = this.state;
    this.setState({
      inputText: '',
      productsArray: [inputText, ...productsArray],
    });
  };

  render() {
    const { inputText, productsArray } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="name">
            <input
              type="text"
              id="inputText"
              name="inputText"
              value={inputText}
              onChange={this.handleChange}
            />
          </label>
          <button type="button" onClick={this.handleAddButton}>
            +
          </button>
        </form>
        <section>
          Lista
          {productsArray.map((product) => (
            <p>{product}</p>
          ))}
        </section>
      </div>
    );
  }
}
