import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import { AiOutlineCloseCircle, AiOutlineEdit } from 'react-icons/ai';
import './Input.css';

export default class Index extends Component {
  constructor() {
    super();

    this.state = {
      inputText: '', // nova tarefa
      productsArray: [], // tarefas
      index: -1,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { productsArray, index } = this.state;
    let { inputText } = this.state;
    inputText = inputText.trim();

    if (productsArray.indexOf(inputText) !== -1) return;

    const newProducts = [...productsArray];

    if (index === -1) {
      this.setState({
        productsArray: [...newProducts, inputText],
        inputText: '',
      });
    } else {
      newProducts[index] = inputText;

      this.setState({
        productsArray: [...newProducts],
        index: -1,
        inputText: '',
      });
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleEdit = (event, index) => {
    const { productsArray } = this.state;
    this.setState({
      index,
      inputText: productsArray[index],
    });
  };

  handleDelete = (event, index) => {
    const { productsArray } = this.state;
    const newProducts = [...productsArray];
    newProducts.splice(index, 1);

    this.setState({ productsArray: [...newProducts] });
  };

  render() {
    const { inputText, productsArray } = this.state;

    return (
      <div className="form-container">
        <p>Adicione ou procure produtos na lista:</p>
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="name">
            <input
              type="text"
              id="inputText"
              name="inputText"
              value={inputText}
              onChange={this.handleChange}
              className="form-input"
            />
          </label>
          <button type="submit" onClick={this.handleAddButton}>
            <FaPlus />
          </button>
        </form>
        <section>
          Lista
          <ul>
            {productsArray.map((product, index) => (
              <li key={product}>
                {product}
                <div>
                  <AiOutlineEdit
                    onClick={(event) => this.handleEdit(event, index)}
                  />
                  <AiOutlineCloseCircle
                    onClick={(event) => this.handleDelete(event, index)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
