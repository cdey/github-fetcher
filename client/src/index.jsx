import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  getRepos () {
    var context = this;
    $.ajax({
      url: '/repos',
      method: 'GET',
      success: function(data) {
        console.log('data', data);
        context.setState({
          repos: data.body
        });
      },
      error: function() {
        console.log('error');

      }
    })
  }

  search (term) {
    console.log(`${term} was searched`);

    var data = {term: term};
    $.ajax({
      url: '/repos/import',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: JSON.stringify(data),
      success: function() {
        console.log('post request worked');
        this.getRepos().bind(this);
      },
      error: function() {
        console.log('error');
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));