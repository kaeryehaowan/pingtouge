import React from 'react';
import { Button } from 'antd';
import './index.css'
function Header(props) {
    const {
        onAddUser
    } = props
    return <div className='p-header__container'>
        <div className='p-header__container--main'>
            <h2 className='title'>User Directory</h2>
            <Button onClick={onAddUser} type="primary">Add User</Button>
        </div>
        <div className='p-header__container--placeholder'></div>
    </div>
}
export default React.memo(Header)