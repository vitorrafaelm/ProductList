import React, { useState, useContext } from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';
import './styles.css';

const SignIn: React.FC = () => {
    const [email, setEmail]: any = useState();
    const [password, setPassword]: any = useState();

    return (
        <>
            <div className="loginContainer">
                <div className="loginBox">
                    <h1 className="signInColorH1">Log in.</h1>
                    <Form
                        name="basic"
                        layout="vertical"
                        wrapperCol={{
                            span: 24,
                        }}
                    >
                        <Form.Item
                            label="E-mail"
                            name="email"
                            rules={[{
                                required: true,
                                message: 'Please input your email!',
                            },
                            ]}
                        >
                            <Input onChange={((e) => setEmail(e.target.value))} placeholder="Type your email" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input type="password" onChange={((e) => setPassword(e.target.value))} placeholder="Type your password" />
                        </Form.Item>

                        <Form.Item>
                            <Button htmlType="submit" type="primary" block>Submit</Button>
                        </Form.Item>
                    </Form>
                    <div className="colorOne">
                        Don't have an account? <Link className="fontWeight" to="/register">Sign Up</Link>
                    </div>
                    <Link className="fontWeight" to="/changePassword">Forgot password?</Link>
                </div>
            </div>
        </>
    )
};

export default SignIn;