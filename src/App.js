import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer, { withRouter } from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:userId?' element={<ProfileContainer />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<Login />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose (
  withRouter,
  connect(mapStateToProps, {initializeApp})
) (App);
