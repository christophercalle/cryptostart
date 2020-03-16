import React from 'react';

export const AppContext = React.createContext();

export class AppProvider extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page: 'dashboard',
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    }
  }

  confirmFavorites(){
    console.log('Hello')
  }

  savedSettings(){
    let cryptoCoinData = JSON.parse(localStorage.getItem('cryptoCoin'));
    if (!cryptoCoinData){
      return {page: 'settings', firstVisit: true}
    }
    return {};
  }

  setPage = page => this.setState({page})

  render(){
    return(
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

