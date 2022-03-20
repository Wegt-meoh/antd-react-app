import React from 'react'
import { useState } from 'react';
import { List, Typography, Divider, Input, Space, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function Person() {

  const data=['sdf']

  const [username, setusername] = useState('');

  function addPerson() {
    const personObj={username:username}
    
  }

  return (
    <div>
      <Space direction='vertical'>
        <Divider orientation="left">Person</Divider>
        <div>
          <Input prefix={<UserOutlined />}
            size="middle"
            style={{ width: '200px' }}
            onChange={(e)=>{setusername(e.target.value)}}
            placeholder="input username here"></Input>
          <Button onClick={addPerson}>add</Button>
        </div>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </Space>
    </div>
  )
}



