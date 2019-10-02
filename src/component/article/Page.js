import React from 'react';
import { Button } from '@material-ui/core';

const Page = ({ pageTotal, p, onClick }) => {
 let list = [];
 for (let i = 1; i <= pageTotal; i++) {
  list.push(i)
 }
 return (
  <div className="page-number">
   {list.map(num => <Button size="small" color="primary" onClick={() => onClick(num)} key={num}
    variant={num === p ? "contained" : "text"}
   > {num}</Button>)}
  </div>
 );
};

export default Page;