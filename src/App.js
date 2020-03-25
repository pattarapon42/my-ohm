import{BrowserRouter as Router,Route,Link} from 'react-router-dom';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';


import Bisection from './Root of Equation/Bisection'
import Secant from './Root of Equation/Secant';
import Onepoint from './Root of Equation/Onepoint'
import Newtonraphson from './Root of Equation/Newton-raphson'

import Forwardh from './Differentiation/Forwardh'
import Forwardh2 from './Differentiation/Forwardh2'
import Backwardh from './Differentiation/Backwardh';
import Backwardh2 from './Differentiation/Backwardh2';
import Centralh from './Differentiation/Centralh'
import Centralh2 from './Differentiation/Centralh2'

const { SubMenu } = Menu;
const { Content,Sider } = Layout;

  class App extends Component {
    constructor(props) {
      super(props)

      this.state = {

      }
    }
    
    

    render() {
      var sizetop={
        fontSize:70,
        color:'#413d3d'
      }
      return (
        
        <Router>
         
          <Layout>
          
          <h1 style={sizetop}>NUMERICAL METHOD</h1>
          
            <Content style={{ padding: '0 50px' }}>
              <Layout className="site-layout-background" style={{ padding: '50px 0' }}>
                <Sider className="site-layout-background" width={200} >
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '0%' }}
                  >
                    <SubMenu
                      key="sub1"
                      title={
                        <span>
                  
                      Root of Equation
                        </span>
                      }
                    >
                      
                      <Menu.Item key="1"><CaretRightOutlined />Bisection <Link to="/Bisection" />  </Menu.Item>
                      <Menu.Item key="2"><CaretRightOutlined />Secant <Link to="/Secant" />  </Menu.Item>
                      <Menu.Item key="3"><CaretRightOutlined />Onepoint <Link to="/Onepoint" />  </Menu.Item>
                      <Menu.Item key="4"><CaretRightOutlined />Newton-raphson <Link to="/Newtonraphson" />  </Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      title={
                        <span>
                          
                          Differentiation
                        </span>
                      }
                    >
                      <Menu.Item key="1"><CaretRightOutlined />Forwardh <Link to="/Forwardh" />  </Menu.Item>
                      <Menu.Item key="2"><CaretRightOutlined />Backwardh <Link to="/Backwardh" />  </Menu.Item>
                      <Menu.Item key="3"><CaretRightOutlined />Centralh <Link to="/Centralh" />  </Menu.Item>
                      <Menu.Item key="1"><CaretRightOutlined />Forwardh2 <Link to="/Forwardh2" />  </Menu.Item>
                      <Menu.Item key="4"><CaretRightOutlined />Backwardh2 <Link to="/Backwardh2" />  </Menu.Item>
                      <Menu.Item key="3"><CaretRightOutlined />Centralh <Link to="/Centralh2" />  </Menu.Item>
                      
                    </SubMenu>
                  </Menu>
                </Sider>
                <Content style={{ background: "#413d3d", color: "black", padding: '0 24px', minHeight: 750 }}>
                  <Route path="/Bisection" component={Bisection} />
                  <Route path="/Secant" component={Secant} />
                  <Route path="/Onepoint" component={Onepoint} />
                  <Route path="/Newtonraphson" component={Newtonraphson} />
                  <Route path="/Forwardh" component={Forwardh} />
                  <Route path="/Forwardh2" component={Forwardh2} />
                  <Route path="/Backwardh" component={Backwardh} />
                  <Route path="/Backwardh2" component={Backwardh2} />
                  <Route path="/Centralh" component={Centralh} />
                  <Route path="/Centralh2" component={Centralh2} />
                </Content>
              </Layout>
            </Content>
          </Layout>
        </Router>
      );
    }
  }

export default App;
