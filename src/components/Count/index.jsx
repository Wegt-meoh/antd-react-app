import { Space ,Select,Button} from 'antd';
import React, { useState } from 'react'
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "../../redux/actions/actionCreator";

const {Option}=Select

function CountUI(props) {
    const seletDefaultValue = 1
    const [dateThis, setDataThis] = useState([1, 2, 3, 4, 5])
    const [selectNum,setSelectNum]= useState(seletDefaultValue)

    return (
        <Space direction='vertical'>
            <h1>当前求和的值为：<span id='result'>{props.count}</span></h1>
            <Space>
                <Select defaultValue={seletDefaultValue} onChange={(value)=>{setSelectNum(value)}}>
                    {
                        dateThis.map((i, index) => {
                            return (
                                <Option value={i} key={index}>
                                    {i}
                                </Option>
                            )
                        })
                    }
                </Select>
                <Button onClick={()=>props.increment(selectNum)}>+</Button>
                <Button onClick={()=>props.decrement(selectNum)}>-</Button>
                <Button >asynchronous increment</Button>
            </Space>
        </Space>
    );
}

function mapStateToProps(state) {
    return { count: state }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: (data) => {
            dispatch(incrementAction(data))
        },
        decrement:(data)=>{
            dispatch(decrementAction(data))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUI) 