import React from 'react';
import CommentList from './comment/CommentList';

export const UserContext = React.createContext(null);

const withUser = Component => props => (
 <UserContext.Consumer>
  {value => <Component {...props} currentUser={value} />}
 </UserContext.Consumer>)

export const CommentListWithUser = withUser(CommentList)