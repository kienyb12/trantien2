import './Main.css';
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    HashRouter, Redirect, Switch, BrowserRouter
} from 'react-router-dom';
import Home from "./Home";
import { Layout, Menu, Row, Col } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import routes from './view';
import About from './About';
const { Header, Sider, Content } = Layout;
// const routes = [
//     {
//         path: 'index',
//         breadcrumbName: 'home',
//     },
//     {
//         path: 'first',
//         breadcrumbName: 'first',
//         children: [
//             {
//                 path: '/general',
//                 breadcrumbName: 'General',
//             },
//             {
//                 path: '/layout',
//                 breadcrumbName: 'Layout',
//             },
//             {
//                 path: '/navigation',
//                 breadcrumbName: 'Navigation',
//             },
//         ],
//     },
//     {
//         path: 'second',
//         breadcrumbName: 'second',
//     },
// ];

const pageList = [
    {
        name: 'Dashboard',
        path: '/home',
        component: Home,
    }
]


class Main extends Component {

    // constructor(props) {
    //     super(props)
    // }
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Router>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                <Link to="/home">
                                    <span>Home</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                                <Link to="/about">
                                    <span>Dashboard</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UploadOutlined />}>
                                nav 3
                        </Menu.Item>
                        </Menu>
                    </Router>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content className="test">
                        {/* <HashRouter>
                            <Route path="/" component={Home} />
                        </HashRouter> */}

                        {/* <HashRouter>
                            {routes.map((page, key) => (
                                <Route path={page.path} component={page.component} key={key} />
                            ))}
                            <Redirect from="/" to="/home" />
                        </HashRouter> */}
                        <BrowserRouter>
                            <Switch>
                                {/* {routes.map((page, key) => (
                                    <Route path={page.path} component={page.component} key={key} />
                                ))}
                                <Redirect from="/" to="/home" /> */}

                                <Route exact path='/home' component={Home}></Route>
                                <Route exact path='/about' component={About}></Route>
                            </Switch>
                        </BrowserRouter>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Main