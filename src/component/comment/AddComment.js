import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import Style from './AddComment.module.css';

class AddComment extends Component {
 state = {
  text: ''
 };

 handleChange = ({ target }) => {
  const { value } = target;
  this.setState({
   text: value
  })
 }

 onHandleSubmit = (e) => {
  const { text } = this.state;
  e.preventDefault();
  this.props.onSubmit(text)
  this.setState({ text: '' })
 }
 render() {
  const { text } = this.state;
  return (
   <div className={Style.outline}>
    <h4>Post a comment to this article with current author</h4>
    <form onSubmit={this.onHandleSubmit} >
     <div className={Style.form}>
      <div className={Style.body}>
       <TextField label='comment' value={text} onChange={this.handleChange} margin='none' fullWidth />
      </div>
      <div className={Style.submit}>
       <Button type="submit" variant="contained" size="small" color="primary" disabled={!text}> Submit </Button>
      </div>
     </div>
    </form>
   </div>
  )
 }
};

export default AddComment;