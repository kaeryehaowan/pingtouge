import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './src/components/header';
import UserCard from './src/components/user-card'

function App() {
  // state
  // user list
  const [userList, updateUserList] = useState([]);
  // methods
  // add user
  const onAddUser = function () {
    let _userList = JSON.parse(JSON.stringify(userList))
    _userList.push({
      first: '',
      last: '',
      gender: '',
      // [form, panel]: form 为还处于输入状态， panel 为已经保存的状态
      state: 'form', 
      // 这里大概模拟一下，hashId
      id: Date.now() + `${parseInt(Math.random() * 10)}`
    })
    updateUserList(_userList)
  }
  // input user
  const onUserInfoChange = function (e,index) {
    let _userList = JSON.parse(JSON.stringify(userList))
    _userList[index] = e
    updateUserList(_userList)
  }
  // save user
  const onSaveUser = function (index) {
    let _userList = JSON.parse(JSON.stringify(userList))
    _userList[index].state = 'panel'
    updateUserList(_userList)
  }
  // cancel user
  const onCancelUser = function (index) {
    let _userList = JSON.parse(JSON.stringify(userList))
    _userList.splice(index,1)
    updateUserList(_userList)
  }
  return (
    <div className='p-main__container'>
      <Header onAddUser={onAddUser} />
      {
        userList.map((item, index) => {
          return <div className='user-card__container' key={`user-${item.id}`}>
            <UserCard type={item.state} onChange={(e)=>{
              onUserInfoChange(e,index)
            }} onSaveUser={()=>{
              onSaveUser(index)
            }}  onCancelUser={()=>{
              onCancelUser(index)
            }} userInfo={item} />
          </div>
        })
      }
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
