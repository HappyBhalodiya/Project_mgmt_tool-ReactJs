import React ,{ Component} from "react";
import "./App.css";
import { Actions } from 'react-router-flux';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import cors from 'cors';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FilterResults from 'react-filter-search';
import Modal from 'react-awesome-modal';
import { Link } from 'react-router-dom';
import TimePicker from 'react-times';
import 'react-times/css/material/default.css';


let result1 = [];
let cardborder1=[];
let border1=[];
let priority;
let priority1='';

export default class MainScreen extends  Component{
      constructor(props) {
            super(props);
            this.state = {
                  visible : false
            }
            this.state = { value1: 'select'};
            this.state = { value2: 'select'};
            this.state = { value3: 'select'};
            this.state = { data:[],   
                           todo:[],
                           inprogress:[],
                           testing :[],
                           done :[], 
                           titleModel: [],
                           descModel:[],
                           createbyModel:[],
                           statusModel:[],
                           assignModel:[],
                           createdDateModel:[],
                           prorityModel:[] ,
                           idEditModel:[]  ,
                           dueDateModel:[], 
                           items: []  ,  
                           searchText:'',
                           updatedList1:[],
                            rowData:[]
                           
                 
            };
      }
      filterList(event) {
        
            let updatedList = [];
           
            console.log("event.target = ", event.target.value);
            this.state.searchText = event.target.value;
            for(let i=0 ; i < this.state.data.length ; i++) 
                  updatedList.push(this.state.data[i].title);
            console.log("UpdatedList = ",updatedList);
            let updatedList1 = updatedList.filter(item => {
                  return item.toLowerCase().indexOf(
                       this.state.searchText.toLowerCase()) !== -1;
            });
            console.log("Output array = ",updatedList1);
         //  this.state.rowData=updatedList1;
           
          
            this.setState({items: updatedList1});

            if(this.state.searchText==''){
                  this.state.searchText= this.state.data;
            }
            else{
                  this.state.searchText=this.doProcess()
            }
      }
      doProcess(data){
            
             for(let i=0;i< this.state.data.length; i++){
          // console.log("row====",this.state.data[i].status);
              if(this.state.data[i].status == "to do"){

                        this.setState(prevState =>({
                              todo: [...prevState.todo, this.state.data[i]]
                        }))
                  }
                  else if(this.state.data[i].status == "in progress"){

                        this.setState(prevState =>({
                              inprogress: [...prevState.inprogress, this.state.data[i]]
                        }))
                  }
                  else if(this.state.data[i].status == "testing"){

                        this.setState(prevState =>({
                              testing: [...prevState.testing, this.state.data[i]]
                        }))
                  }
                  else{
                        this.setState(prevState =>({
                              done: [...prevState.done, this.state.data[i]]
                        }))
                  }
             }
            
      }
      onChange(e) {
            this.setState({
                  value1: e.target.value1,
            })
      }
      onChange2(e) {
            this.setState({
                  value2: e.target.value2,
            })
      }
      onChange3(e) {
            this.setState({
                  value3: e.target.value3,
            })
      }
      openModal(id) {

            this.setState({
                  visible : true
            });
      }
      closeModal() {
            this.setState({
                  visible : false
            });
      }
      allowDrop(ev) {
            ev.preventDefault();
      }
      drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
      }
      drop(ev) {
            ev.preventDefault();
            var dataDrop = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(dataDrop));
            console.log("dataDrop====>",dataDrop);
      }
      bordershow(data){

            if(data.priority==4){
                  return priority1='3px solid orange';
            }
            else if(data.priority==3){
                  return priority1='3px solid yellow';
            }
            else if(data.priority==2){
                  return priority1='3px solid red';    
            }
            else {
                  return priority1='3px solid blue';
            }
      } 

      componentDidMount(){
            fetch('http://206.189.231.135:4000/tasks/all-task').
            then((Response)=>Response.json()).
            then((findresponse,err)=>
            {      
                  for(let i=0;i<findresponse.length;i++){

                        this.setState(prevState =>({
                              data: [...prevState.data, findresponse[i]]
                        }))

                        if(findresponse[i].status == "to do"){

                              this.setState(prevState =>({
                                    todo: [...prevState.todo, findresponse[i]]
                              }))
                        }
                        else if(findresponse[i].status == "in progress"){

                              this.setState(prevState =>({
                                    inprogress: [...prevState.inprogress, findresponse[i]]
                              }))
                        }
                        else if(findresponse[i].status == "testing"){

                              this.setState(prevState =>({
                                    testing: [...prevState.testing, findresponse[i]]
                              }))
                        }
                        else{
                              this.setState(prevState =>({
                                    done: [...prevState.done, findresponse[i]]
                              }))
                        }
                  }
            })
      }


      getInitialsOfName(name){
            var str = name.split(' ')[0][0]+name.split(' ')[1][0];
            return str.toUpperCase();

      }
      onTimeChange(options) {

      }

      onFocusChange(focusStatue) {
            // do something
      }

      model(id){
            let id1 =id;

            for(let i=0;i < this.state.data.length;i++)
            {       

                  if(this.state.data[i]._id == id1){

                        var result = this.state.data.filter(obj => {
                              return obj._id===id1

                        })
                        result1 = result;
                        this.setState({titleModel: result1[0].title});
                        this.setState({descModel: result1[0].desc});
                        this.setState({createbyModel: result1[0].createdBy.name});
                        this.setState({statusModel: result1[0].status});
                        this.setState({assignModel: result1[0].assignTo.name});
                        this.setState({createdDateModel: result1[0].createdAt});

                        this.setState({idEditModel: result1[0]._id});
                        this.setState({dueDateModel: result1[0].dueDate});

                        if(result1[0].priority==4){
                              var cardborder=result1[0].priority="High";
                              this.setState({prorityModel: result1[0].priority});
                              cardborder1=cardborder
                              console.log(cardborder1);

                        }
                        else if(result1[0].priority==3){
                              var cardborder=  result1[0].priority="Medium";
                              this.setState({prorityModel: result1[0].priority});
                              cardborder1=cardborder
                              console.log(cardborder1);
                        }
                        else if(result1[0].priority==2){
                              var cardborder=  result1[0].priority="Highest";
                              this.setState({prorityModel: result1[0].priority});
                              cardborder1=cardborder
                              console.log(cardborder1);
                        }
                        else if(result1[0].priority==1){
                              var cardborder=  result1[0].priority="low";
                              this.setState({prorityModel: result1[0].priority});
                              cardborder1=cardborder
                              console.log(cardborder1);
                        }
                        else{
                              var cardborder=  result1.priority="low";
                              this.setState({prorityModel: result1[0].priority});
                              cardborder1=cardborder
                              console.log(cardborder1);
                        }
                  }
            }   
            return(

                  <div className="modal" id="myModal">

                  <div className="modal-dialog ">
                  <div className="modal-content">
                  <div className="modal-header fixed-header">
                  <h4 className="modal-title">Modal title</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>

                  <div className="modal-body">
                  <div class="row">
                  <span className="dot"></span>
                  <span className="donContent"><b>{this.state.titleModel}</b></span>
                  </div>

                  <div className="row">
                  <p className="task">{this.state.descModel}</p>
                  </div>
                  <div className="row box">
                  <div className="col-12 col-md-6">
                  <p><b>Created By: </b>{this.state.createbyModel} </p>
                  <p><b>Created Date: </b>{this.state.createdDateModel} </p>
                  <p><b>Status: </b>{this.state.statusModel} </p>
                  <p><b>start time : </b></p>
                  </div>
                  <div className="col-12 col-md-6">
                  <p><b>Assign To: </b>{this.state.assignModel}  </p>
                  <p><b>Prority: </b>{this.state.prorityModel} </p>
                  <p><b>DueDay:</b>{this.state.dueDateModel}</p>
                  <p><b>end time: </b></p>

                  </div>

                  <div className="row buttonRow">

                  <button className="btn btn-default edit"  onClick={() => this.openModal(this.state.idEditModel)}>Edit</button> 
                  </div>
                  </div>
                  </div>
                  <div className="modal-footer">

                  <h1>Comments</h1>
                  <h4>No comments on this be the first one to comments on...</h4>

                  <div className="row">
                  <CKEditor
                  editor={ ClassicEditor }
                  data="<p>Hello from Happy...</p>"
                  onInit={ editor => {


                  } }
                  onChange={ ( event, editor ) => {
                        const data = editor.getData();

                  } }
                  onBlur={ editor => {

                  } }
                  onFocus={ editor => {

                  } }
                  />
                  </div>
                  <div className="row">
                  <button className="btn btn-default uploadbtnModel">upload image with comment</button> 
                  <button className="btn btn-default addcomment" >Add comment</button> 
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  )
      }

      render() {
            return (
                  <div>
                  {this.model()}
                  <div className="body">
                  <MuiThemeProvider>
                  <div className="container">
                  <div className="row leave">

                  <Link to="/leave">Leave Form</Link>

                  </div>

                  <div className="row ">

                  <TextField className="searchText" 
                  hintText="Search text goes hear"
                  value={this.state.searchText}
                  onChange={this.filterList.bind(this)}
                  floatingLabelText="Search"/>

                  </div>
                  <div className="row">

                  <div className="column" id="div11" 
                  onDrop={(event)=>this.drop(event)} 
                  onDragOver={(event)=>this.allowDrop(event)}> 
                  <div className="shadow">
                  <div className="shadow p-3 mb-3 text-black shadowText">

                  <div class="row">
                  <div className=" titleCard">TODO</div>
                  <div className=" cardcount"> {(this.state.todo).length}</div>    
                  </div>

                  </div>
                  {
                        this.state.todo.map((data)=>


                              <div data-toggle="modal" data-target="#myModal" onClick={()=>this.model(data._id)}  className="text-black shadow p-3 mb-3 bg-white  " 
                              id={data._id}
                              style={{borderLeft:this.bordershow(data)}}
                              draggable="true" onDragStart={(event)=>this.drag(event)}> 
                              <div className="fonts">
                              <b>{data.title}</b>
                              <p>{data.desc}</p>
                              <div className="row icons">
                              <span className="glyphicon glyphicon-ok-sign icon"></span>
                              <span className="dot"><b>{this.getInitialsOfName(data.assignTo.name)}</b></span>
                              </div>
                              <div className="row">
                              <p className="smallText">{data.uniqueId}</p>

                              <p className="name">{data.assignTo.name}</p>
                              </div>
                              </div>
                              </div>

                              )  
                  }
                  </div>
                  </div>


                  <div className="column" id="div2" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)}>
                  <div className="shadow">
                  <div className="shadow p-3 mb-3   text-black shadowText">

                  <div class="row">
                  <div className="titleCard">IN PROGRESS</div>
                  <div className=" cardcount">  {(this.state.inprogress).length}</div>    
                  </div>

                  </div>  
                  {

                        this.state.inprogress.map((data)=>
                              <div data-toggle="modal" data-target="#myModal" onClick={()=>this.model(data._id)}  className="text-black shadow p-3 mb-3 bg-white  " 
                              id={data._id}
                              style={{borderLeft:this.bordershow(data)}}

                              draggable="true" onDragStart={(event)=>this.drag(event)}> 

                              <div className="fonts">
                              <b>{data.title}</b>
                              <p>{data.desc}</p>
                              <div className="row icons">
                              <span className="glyphicon glyphicon-ok-sign icon"></span>
                              <span className="dot">{this.getInitialsOfName(data.assignTo.name)}</span>
                              </div>
                              <div className="row">
                              <p className="smallText">{data.uniqueId}</p>

                              <p className="name">{data.assignTo.name}</p>
                              </div>


                              </div>
                              </div>

                              )
                  }

                  </div>
                  </div>


                  <div className="column" id="div5" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)}>
                  <div className="shadow">
                  <div className="shadow p-3 mb-3  text-black shadowText">

                  <div class="row">
                  <div className=" titleCard">TESTING</div>
                  <div className=" cardcount">  {(this.state.testing).length}</div>    
                  </div>

                  </div> 
                  {
                        this.state.testing.map((data)=>

                              <div data-toggle="modal" data-target="#myModal" onClick={()=>this.model(data._id)}  className="text-black shadow p-3 mb-3 bg-white  " 
                              id={data._id}
                              style={{borderLeft:this.bordershow(data)}}
                              // style={{ border:this.state.border }}
                              draggable="true" onDragStart={(event)=>this.drag(event)}> 

                              <div className="fonts">
                              <b>{data.title}</b>
                              <p>{data.desc}</p>
                              <div className="row icons">
                              <span className="glyphicon glyphicon-ok-sign icon"></span>
                              <span className="dot">{this.getInitialsOfName(data.assignTo.name)}</span>
                              </div>
                              <div className="row">
                              <p className="smallText">{data.uniqueId}</p>

                              <p className="name">{data.assignTo.name}</p>
                              </div>


                              </div>
                              </div>

                              )
                  }

                  </div>
                  </div>


                  <div className="column" id="div8" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)}>
                  <div className="shadow">
                  <div className="shadow p-3 mb-3   text-black shadowText">
                  <div class="row">
                  <div className=" titleCard">DONE</div>
                  <div className=" cardcount"> {(this.state.done).length}</div>    
                  </div>


                  </div> 
                  {

                        this.state.done.map((data)=>

                              <div data-toggle="modal" data-target="#myModal" onClick={()=>this.model(data._id)}  className="text-black shadow p-3 mb-3 bg-white  " 
                              id={data._id}
                              style={{borderLeft:this.bordershow(data)}}
                              //style={{ border:this.state.border }}
                              draggable="true" onDragStart={(event)=>this.drag(event)}> 

                              <div className="fonts">
                              <b>{data.title}</b>
                              <p>{data.desc}</p>
                              <div className="row icons">
                              <span className="glyphicon glyphicon-ok-sign icon"></span>

                              <span className="dot">{this.getInitialsOfName(data.assignTo.name)}</span>
                              </div>
                              <div className="row username">
                              <p className="smallText">{data.uniqueId}</p>

                              <p className="name">{data.assignTo.name}</p>
                              </div>



                              </div>
                              </div>

                              )
                  }

                  </div>
                  </div>



                  <div className="container">
                  <Modal className="modelsecond" visible={this.state.visible}  effect="fadeInUp" onClickAway={() => this.closeModal()} >

                  <div className="editModel" >


                  <div className="modal-header">
                  <h4 className="modal-title">Edit Item</h4>
                  <button type="button" className="close" onClick={() => this.closeModal()}>&times;</button>


                  </div>
                  <div className="row firstRowcontent">
                  <label> Title:</label>
                  <TextField
                  value={this.state.titleModel}
                  className="titleText"
                  onChange = {(event,newValue) => this.setState({title:newValue})}  /><br/>

                  <label> Discription:</label>
                  <TextField
                  value={this.state.descModel}
                  className="titleText"
                  onChange = {(event,newValue) => this.setState({desc:newValue})}  />

                  </div>
                  <a href="#" className="btn btnAddfiles btn-lg">
                  <span className="glyphicon glyphicon-paperclip"></span> Add Files 
                  </a>

                  <div className="row">
                  <div className="col-sm-6 selectNames">
                  <h4>Assign To</h4>
                  <select value={this.state.value1} onChange={this.onChange.bind(this)} className="form-control">
                  <option value="select">{this.state.assignModel}</option>
                  <option value="First">Komal Sakhiya</option>
                  <option value="Second">Foram Trada</option>
                  <option value="Third">Ruchi Bhalodiya</option>
                  </select>
                  </div>
                  <div className="col-sm-6 selectNames" >
                  <h4>Priority</h4>
                  <select value={this.state.value2} onChange={this.onChange2.bind(this)} className="form-control">
                  <option value="select">{this.state.prorityModel}</option>
                  <option value="First">Medium</option>
                  <option value="Second">High</option>
                  <option value="Second">Highest</option>
                  <option value="Second">low</option>

                  </select>
                  </div>  
                  </div>
                  <div className="row">
                  <div className="col-sm-6 duedays">
                  <label>Due Days</label>
                  <TextField className="searchText days" hintText="1" type="number"/>


                  </div>
                  <div className="col-sm-6 duedays">
                  <label>Estimated Time</label>
                  <TimePicker
                  onFocusChange={this.onFocusChange.bind(this)}
                  onTimeChange={this.onTimeChange.bind(this)}
                  />

                  </div>
                  </div>




                  <div className="row statusDropdown">
                  <h4>Status</h4>
                  <select disabled value={this.state.value3} onChange={this.onChange3.bind(this)} className="form-control">
                  <option value="select" disabled>{this.state.statusModel}</option>
                  <option value="First">Medium</option>
                  <option value="Second">High</option>

                  </select>
                  </div>

                  <div className="modal-footer footer_right">
                  <button className="btn btn-default" onClick={() => this.closeModal()}>close</button> 
                  <button className="btn btn-default">save change</button>  
                  </div>
                  </div>
                  </Modal>
                  </div>
                  </div> 
                  </div>

                  </MuiThemeProvider>
                  </div>

                  )
}
</div>

);

}

}
const style = {
      margin: 15,
};

