import React from 'react'
import axios from 'axios';
import {
    Form, Input,
    Radio, Button
} from 'antd';
import './index.css'
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 20,
    },
};
class UserCard extends React.Component {
    formRef = React.createRef();
    // methods 
    onInput = (e, t) => {
        const {
            onChange = () => { },
            userInfo = {}
        } = this.props
        if (t === 'first') {
            userInfo.first = e.target.value
        } else if (t === 'last') {
            userInfo.last = e.target.value
        } else if (t === 'gender') {
            userInfo.gender = e.target.value
        }
        onChange(userInfo)
    }
    onFetch = async () => {
        try {
            const {
                onChange = () => { },
                userInfo = {}
            } = this.props
            // 这里写的就没那严谨了，取值那里是有风险的
            let { data } = await axios({
                url: 'https://randomuser.me/api/',
                method: 'get'
            })
            userInfo.first = data.results[0].name.first
            userInfo.last = data.results[0].name.last
            userInfo.gender = data.results[0].gender
            onChange(userInfo)
        } catch (error) {

        }
    }
    render() {
        const {
            type = 'form',
            userInfo = {},
            onSaveUser = () => { },
            onCancelUser = () => { },
        } = this.props
        return <div className='p-user-card__container'>
            {
                type === 'form' &&
                <Form
                    {...layout}
                    ref={this.formRef}
                    name="control-ref">
                    <Form.Item
                        name="first"
                        label="First"
                    >
                        <Input value={userInfo.first} onChange={(e) => {
                            this.onInput(e, 'first')
                        }} />
                    </Form.Item>
                    <Form.Item
                        name="last"
                        label="Last"
                    >

                        <Input value={userInfo.last} onChange={(e) => {
                            this.onInput(e, 'last')
                        }} />
                    </Form.Item>
                    <Form.Item
                        name="gender"
                        label="Gender"
                    >
                        <Radio.Group value={userInfo.gender} onChange={(e) => {
                            this.onInput(e, 'gender')
                        }} >
                            <Radio value="male">male</Radio>
                            <Radio value="female">female</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button onClick={this.onFetch} type="primary" ghost='true' className='button-item__container'>
                            Random User
                        </Button>
                        <Button onClick={onSaveUser} type="primary" className='button-item__container'>
                            Save
                        </Button>
                        <Button onClick={onCancelUser} type="default" className='button-item__container'>
                            Cancel
                        </Button>
                    </Form.Item>
                </Form>
            }
            {
                type === 'panel' &&
                <div>
                    <div className='panel-item__container'>
                        <div className='panel-item__label'>First:</div>
                        <div>{userInfo.first}</div>
                    </div>
                    <div className='panel-item__container'>
                        <div className='panel-item__label'>Last:</div>
                        <div>{userInfo.last}</div>
                    </div>
                    <div className='panel-item__container'>
                        <div className='panel-item__label'>Gender:</div>
                        <div>{userInfo.gender}</div>
                    </div>
                </div>
            }
        </div>
    }
}
export default UserCard
