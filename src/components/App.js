import React from 'react'
import { BrowserRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom'
import Recommend from './recommend/Recommend'
import Ranking from './ranking/Ranking'
import SingerList from './singer/SingerList'
import Search from './search/Search'
import MusicPlayer from './play/MusicPlayer'
import logo from '../assets/imgs/logo.png'
import '../assets/sass/font.scss'
import '../assets/sass/reset.scss'
import './App.scss'

class App extends React.Component {
  render() {
    return (
     <BrowserRouter>
       <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">React Music</h1>
        </header>
        <div className="music-tab">
          <div className="tab-item selected">
            <NavLink to="/recommend" className="nav-link">
              <span>推荐</span> 
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink to="/ranking" className="nav-link">
              <span>排行榜</span> 
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink to="/singer" className="nav-link">
              <span>歌手</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink to="/search" className="nav-link">
              <span>搜索</span> 
            </NavLink>
          </div>
        </div>
        <div className="music-view">
          <Switch>
            <Route path="/recommend" component={Recommend}></Route>
            <Route path="/ranking" component={Ranking}></Route>
            <Route path="/singer" component={SingerList} />
            <Route path="/search" component={Search}></Route>
            <Redirect from="/" to="/recommend"></Redirect>
            <Route component={Recommend}></Route>
          </Switch>
        </div>
        <MusicPlayer />
      </div>
     </BrowserRouter> 
    )
  }
}

export default App