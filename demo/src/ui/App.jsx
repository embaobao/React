import React, { Component } from "react"
import Item from './Item';






export default class App extends Component {

  state={
  index:0,
  nowEdit:-1,
  todoList:[]
  }


  render() {
    return (
      <div>
          <header>
              <section>
                <label>ToDoList</label>
                <input type="text" onKeyUp={this.addTodo.bind(this)} placeholder="添加ToDo" />
              </section>
          </header>
            <section>
              <h2>正在进行 <span>0</span></h2>
              <ol className="demo-box">
                {
                  this.state.todoList.map(item=>{
                    return !item.finished && <Item 
                    key={item.id} 
                    index={item.id} 
                    isfinished={item.finished} 
                    isEdit={item.id===this.state.nowEdit}
                    content={item.content}
                    onFinshed={this.finished.bind(this)}
                    onEdit={this.edit.bind(this)}
                    onChangeEdit={this.changeEdit.bind(this)} 
                    onSaveEdit={this.saveEdit.bind(this)} 
                    onRemoveItem={this.removeItem.bind(this)}
                    ></Item>
                  })
                }
              
              </ol>
              <h2>已经完成 <span>0</span></h2>
              <ul>
                {
                  this.state.todoList.map(item=>{
                    return item.finished &&<Item 
                    key={item.id} 
                    index={item.id}
                    isfinished={item.finished} 
                    isEdit={item.id===this.state.nowEdit}
                    content={item.content}
                    onFinshed={this.finished.bind(this)}
                    onEdit={this.edit.bind(this)}
                    onChangeEdit={this.changeEdit.bind(this)} 
                    onSaveEdit={this.saveEdit.bind(this)} 
                    onRemoveItem={this.removeItem.bind(this)}
                    ></Item>
                  })
                }
              </ul>
            </section>
      </div>
    )
  }



  addTodo(e){

              if (e.keyCode===13){
                this.state.todoList.unshift(
                  {
                    id:this.state.index,
                    content:e.target.value,
                    finished:false
                  }
                )
                this.setState({
                  index:this.state.index+1
                },()=>{
        db(this.setState.todoList)
      } )
                  e.target.value=''
              }
      
          }

  removeItem(id){


    this.state.todoList.forEach((item,index )=> {
      if(item.id===id){
        this.state.todoList.splice(index, 1)
        this.setState({},()=>{
        db(this.setState.todoList)
      } )
      }
    });
    

  }


  finished(id){
     this.state.todoList.forEach((item,index )=> {
      if(item.id===id){
       item.finished= item.finished?false:true;
       [this.state.todoList[0]    ,this.state.todoList[index]]
     = [this.state.todoList[index],this.state.todoList[0]   ] 
      }
    });

    this.setState({},()=>{
        db(this.setState.todoList)
      } )
      console.log(this.state.todoList)
  }

  edit(id){
    this.setState({
      nowEdit:id
    })
  }

  
  changeEdit(e){
    this.state.todoList.forEach((item,index )=> {
        if(item.id===this.state.nowEdit){
          item.content= e.target.value
          this.setState({})
        }
      })
  }


  saveEdit(e){
    if(e.keyCode===13){
      this.setState({
        nowEdit:-1
      },()=>{
        db(this.setState.todoList)
      } )
    }
  }
}





function db(newData){
  let data=localStorage.getItem('__todolist')
  if(newData){
     localStorage.setItem('__todolist',JSON.parse(newData))
  }else{
    if(data) return data 
    return false
  }
}