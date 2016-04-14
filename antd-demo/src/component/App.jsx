import React from 'react';
import { Menu, Icon } from 'antd';
import { DatePicker, Button } from 'antd';
import './App.less';

const Sidebar = React.createClass({
    getInitialState(){
        return {
            current: '1',
            openKeys: []
        }
    },
    handleClick(e){
        console.log('click',e);
        this.setState({
            current: e.key,
            openKeys: e.keyPath.slice(1)
        });
    },
    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
    });
})

const App = () =>
  <DatePicker />;

export default App;
