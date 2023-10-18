import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderTree = (state) => {
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App state = {state} 
               addPost = {store.addPost.bind(store)} 
               updateNewPostText = {store.updateNewPostText.bind(store)}/>
        </BrowserRouter>
      </React.StrictMode>
    );
  }

rerenderTree(store.getState());

store.subscribe(rerenderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
