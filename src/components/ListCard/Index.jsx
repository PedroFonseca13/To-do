import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AiOutlineCloseCircle, AiOutlineEdit } from 'react-icons/ai';

export default class Index extends Component {
  render() {
    const {
      product, index, handleEdit, handleDelete,
    } = this.props;
    return (
      <div>
        <ul>
          <li key={product}>
            {product}
            <div>
              <AiOutlineEdit
                onClick={(event) => handleEdit(event, index)}
              />
              <AiOutlineCloseCircle
                onClick={(event) => handleDelete(event, index)}
              />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

Index.propTypes = {
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  index: PropTypes.any,
  product: PropTypes.any,
}.isRequired;

// <li key={product}>
//   {product}
//   <div>
//     <AiOutlineEdit
//       onClick={(event) => this.handleEdit(event, index)}
//     />
//     <AiOutlineCloseCircle
//       onClick={(event) => this.handleDelete(event, index)}
//     />
//   </div>
// </li>
