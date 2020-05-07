import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { UserOutlined, LockOutlined, LoadingOutlined } from "@ant-design/icons";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';

const FormItem = Form.Item;



class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
  };

  handleSubmit = (values) => {
     
        this.props.onAuth(
            values.userName,
            values.email,
            values.password,
            values.confirm
        );
        this.props.history.push('/');
      
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }


  render() {

    return (
        <Form
        name="normal_signup"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={this.handleSubmit}
        onFinishFailed={this.onFinishFailed}

      >
        
        <FormItem
            name="username"
            rules= {[{
                 required: true, 
                 message: 'Please input your username!'} 
                ]}>
            
          
        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Username" />
           
        </FormItem>
        
        <FormItem
        name="email"
        rules= {[{
            required: true, 
            message: 'Please input your email!'} 
           ]}>
        
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            placeholder="Email" />
        </FormItem>

        <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

        <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
    <Input.Password placeholder="Confirm password" />
        
    </Form.Item>

        <FormItem>
        <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
            Signup
        </Button>
        Or 
        <NavLink 
            style={{marginRight: '10px'}} 
            to='/login/'> Login
        </NavLink>
        </FormItem>

      </Form>
    );
  }
}

const WrappedRegistrationForm = RegistrationForm;

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);


