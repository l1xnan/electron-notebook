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
    }
})

const App = () =>
  <DatePicker />;

export default App;

