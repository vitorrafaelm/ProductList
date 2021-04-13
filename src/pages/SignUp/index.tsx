import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';

import ToastMessage from '../../components/toastMessage';

import api from '../../services/api';

import 'antd/dist/antd.css';
import '../SignIn/styles.css';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div className="loginContainer">
                <div className="loginBox">
                    <h1 className="signInColorH1">Create an account</h1>
                    <Form
                        name="basic"
                        layout="vertical"
                        wrapperCol={{
                            span: 24,
                        }}
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{
                                required: true,
                                message: 'Please input your name!',
                            },
                            ]}
                        >
                            <Input placeholder="Type your name" onChange={(e) => setName(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="E-mail"
                            name="email"
                            rules={[{
                                required: true,
                                message: 'Please input your email!',
                            },
                            ]}
                        >
                            <Input placeholder="Type your email" onChange={(e) => setEmail(e.target.value)} />
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
                            <Input type="password" placeholder="Type your password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>Sign up</Button>
                        </Form.Item>
                    </Form>

                    <div className="colorOne">
                        Already have an account? <Link className="fontWeight" to="/">Log in</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;