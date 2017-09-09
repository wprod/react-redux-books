import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render(){
    if (!this.props.book){
        return <div>Select a book to get sarted</div>
    }

    return (
      <div>
      <h3>Details for :</h3>
        <h4>{this.props.book.title}</h4>
        <p>{this.props.book.description}</p>
      </div>
    );
  };
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
