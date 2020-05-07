import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import Logo from "../media/logo2.png";
import { connect } from "react-redux";
import * as actions from '../store/actions/auth';



const { Header, Content, Footer } = Layout;
const style = { };
class CustomLayout extends React.Component {

componentDidMount(){
  console.log("chuj",this.props.language );
  
}
render(){

  return(
    <Layout className="layout">
      <link href='http://fonts.googleapis.com/css?family=Lobster+Two' rel='stylesheet' type='text/css'></link>
  
      <Header>
       <Row>
         <Col span={3}>
           
         <div style={style}><img src={Logo}></img></div>
         </Col>
         <Col offset={16} span={2}>
          { 
         
            this.props.isAuthenticated ?
            <div style={style} onClick={this.props.logout}><a>Logout</a></div>
            :
            <div style={style}><Link to='/login'>Login</Link></div>
          }
         </Col>
         <Col span={3}>
         <div style={style}><a>Eng</a> | <a> Pl</a> | <a>Slo</a></div>
         </Col>
       </Row>
      
    
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/">List</Link></Breadcrumb.Item>
        </Breadcrumb>
          <div className="site-layout-content">
              { this.props.children }
          </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>A.I. Writers ©2020 Created by Daniel Czarnożyński</Footer>
    </Layout>
  );

}

}


const WrappedNormalLoginForm =CustomLayout;


const mapDispatchToProps = dispatch => {

    return {
        logout: () => dispatch(actions.logout())
    }
} 

export default withRouter(connect(null, mapDispatchToProps)(WrappedNormalLoginForm));

