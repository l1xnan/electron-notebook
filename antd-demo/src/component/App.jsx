import React from 'react';
import { Menu, Icon } from 'antd';
import { Row, Col } from 'antd';
import { DatePicker, Button } from 'antd';
import './App.less';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const NavBar = React.createClass({
  getInitialState() {
    return {
      current: 'mail'
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  },
  render() {
    return (
      <Menu onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal">
        <Menu.Item key="mail">
          <Icon type="mail" />导航一
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />导航二
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />导航 - 子菜单</span>}>
          <MenuItemGroup title="分组1">
            <Menu.Item key="setting:1">选项1</Menu.Item>
            <Menu.Item key="setting:2">选项2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="分组2">
            <Menu.Item key="setting:3">选项3</Menu.Item>
            <Menu.Item key="setting:4">选项4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="http://www.alipay.com/" target="_blank">导航四 - 链接</a>
        </Menu.Item>
      </Menu>
    );
  }
});

const Sider  = React.createClass({
  getInitialState() {
    return {
      current: '1',
      openKeys: []
    };
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,

      // 当前展开的菜单项 key 数组
      openKeys: e.keyPath.slice(1)
    });
  },
  onToggle(info) {
    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
    });
  },
  render() {
    return (
      <Menu onClick={this.handleClick}
        style={{ width: 240 }}
        openKeys={this.state.openKeys}
        onOpen={this.onToggle}
        onClose={this.onToggle}
        selectedKeys={[this.state.current]}
        mode="inline">
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
          <Menu.Item key="1">选项1</Menu.Item>
          <Menu.Item key="2">选项2</Menu.Item>
          <Menu.Item key="3">选项3</Menu.Item>
          <Menu.Item key="4">选项4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
          <Menu.Item key="5">选项5</Menu.Item>
          <Menu.Item key="6">选项6</Menu.Item>
          <SubMenu key="sub3" title="三级导航">
            <Menu.Item key="7">选项7</Menu.Item>
            <Menu.Item key="8">选项8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
          <Menu.Item key="9">选项9</Menu.Item>
          <Menu.Item key="10">选项10</Menu.Item>
          <Menu.Item key="11">选项11</Menu.Item>
          <Menu.Item key="12">选项12</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
});
// ReactDOM.render(<Sider />, mountNode);
const Content = React.createClass({
    render(){
        return (
            <div>"Hello World!"</div>
        )
    },
});

export default { NavBar, Sider, Content };
