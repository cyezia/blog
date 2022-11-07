import React from 'react';
import 'antd/dist/antd.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './style.less';

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // 将用户名和密码发送到后台进行验证 成功跳转到首页/失败提示错误
    navigate("/administer");
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }
  return (
    <div style={{
      height: '100%',
    }
    }>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}
      <div className="container">
        <div className="box login">
          <div className="form-content">
            <div className="avtar">
            <div className="pic"><img src="/src/pages/Login/img/1.jpg" alt="" /></div>
            </div>
            <h1>Welcome back</h1>
            <Form
              name="normal_login"
              className="login-form"
              // initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                className="form-item"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} />
              </Form.Item>
              <Form.Item
                name="password"
                className="form-item"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input prefix={<LockOutlined className="site-form-item-icon" />}  type="password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Login
                </Button>
              </Form.Item>
            </Form>
            <p className="btn-something">
              Don't have an account ? 
              <span className="signupbtn"> sign up</span>
            </p>
          </div>
        </div>
        {/* <div className="box signup">
          <div className="form-content">
            <div className="avtar">
            <div className="pic"><img src="/src/pages/Login/img/2.jpg" alt="" /></div>
            </div>
            <h1>Let's get started</h1>
            <Form
              name="register"
              className="login-form"
              layout="horizontal"
              autocomplete="off"
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                className="form-item"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} />
              </Form.Item>
              <Form.Item
                name="password"
                className="form-item"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input prefix={<LockOutlined className="site-form-item-icon" />}  type="password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  sign up
                </Button>
              </Form.Item>
            </Form>
            <p className="btn-something">
              Already have an account ? 
              <span className="signupbtn"> login</span>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Login;