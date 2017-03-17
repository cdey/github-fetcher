import React from 'react';
import RepoListItem from './RepoListItem.jsx';

const RepoList = (props) => (
  <div>
    <ul>{props.repos.map((bobo) => {<RepoListItem bobo={bobo}/>})}</ul>
  </div>
)

export default RepoList;