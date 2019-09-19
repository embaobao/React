import React, { Component } from 'react'


export default class Item extends Component {

render() {
    let {content,isfinished,isEdit,index,onRemoveItem,onFinshed,onEdit,onChangeEdit,onSaveEdit}=this.props
        return (
            <li>
                <input onChange={onFinshed.bind(this,index)}  type="checkbox" checked={isfinished}/>
               
                
                <p onClick={onEdit.bind(this,index)}>
                {
                    isEdit&&<input type="text" 
                    onChange={onChangeEdit} 
                    onKeyUp={onSaveEdit} 
                    value={content}/>
                }
                {content}
                </p> <a onClick={onRemoveItem.bind(this,index)} className="removebtn">-</a>
            </li>
        )
    }
}