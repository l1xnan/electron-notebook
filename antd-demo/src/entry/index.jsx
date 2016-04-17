import '../common/lib';
import { NavBar, Sider, Content }from '../component/App';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(<NavBar />, document.getElementById('react-navbar'));
ReactDOM.render(<Sider />, document.getElementById('react-sider'));
ReactDOM.render(<Content />, document.getElementById('react-content'));
