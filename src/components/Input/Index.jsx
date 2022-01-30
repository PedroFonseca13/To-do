import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import { AiOutlineCloseCircle, AiOutlineEdit } from 'react-icons/ai';
import { monName } from '../../CONST';

import './Input.css';

export default class Index extends Component {
  constructor() {
    super();

    this.state = {
      inputText: '', // nova tarefa
      productsArray: [], // tarefas
      index: -1,
      date: '',
      arrayList: [],
    };
  }

  componentDidMount() {
    const { productsArray } = this.state;

    const product = JSON.parse(localStorage.getItem('products'));

    if (!product) return;

    this.setState({ productsArray });

    this.setDate();
  }

  componentDidUpdate(prevProps, prevState) {
    const { productsArray } = this.state;

    if (productsArray === prevState.productsArray) return;

    localStorage.setItem('products', JSON.stringify(productsArray));
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

  testFunction = () => {
    const { productsArray, arrayList } = this.state;
    this.setState({ arrayList: [...productsArray] });
    console.log(productsArray);
    console.log(arrayList);
  };

  setDate = () => {
    const now = new Date();
    const fullDate = `${now.getDay()}/${
      monName[now.getMonth()]
    }/${now.getFullYear()}`;
    this.setState({ date: fullDate });
  };

  render() {
    const { inputText, productsArray, date } = this.state;

    return (
      <div className="form-container">
        <p className="form-container-p">Adicione itens na lista:</p>
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
        <section className="section-input">
          <p className="section-input-p">
            {`Lista -
            ${date}`}
          </p>
          <article>
            {productsArray.map((product, index) => (
              // <ListCard
              //   product={product}
              //   index={index}
              //   handleEdit={this.handleEdit}
              //   handleDelete={this.handleDelete}
              // />

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
          </article>
          <button type="button" onClick={this.testFunction}>Salvar</button>
        </section>
      </div>
    );
  }
}
