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





export default class MainScreen extends  Component{
      constructor(props) {
            super(props);
            this.state = {
                  visible : false
            }
            this.state = { value1: 'select'};
            this.state = { value2: 'select'};
            this.state = { value3: 'select'};
            this.state = {   data: [] };
            // this.state = { todo: '', 
            //                progress: '',
            //                test: '',
            //                done :''
            //               }

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

      openModal() {
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

      componentDidMount(){
            fetch('http://206.189.231.135:4000/tasks/all-task').
            then((Response)=>Response.json()).
            then((findresponse,err)=>
            {
                  console.log("hii",findresponse[2].status)
                  // if(status=="to do"){
                  //      {this.show()}
                        
                  // }
                  // else if(status == "in prgress"){
                  //       {this.progress()}
                       
                  // }
                  // else if(status == "testing"){
                  //       {this.testing()}
                  // }
                  // else{
                  // }
                       this.setState({
                        data:findresponse,
                  }) 

                  
            })

      }
      show(){
            return(
               

                  this.state.data.map((dynamcData,key)=>

            // if(dynamcData.status=="to do"){
            //       {this.show()}
            // }
            // else if(dynamcData.status=="in progress"){
            //       {this.show()}
            // }
            // else{
            //       {
            //            this.show();
            //       }
            // }
                        <div data-toggle="modal" data-target="#myModal" className="text-black shadow p-3 mb-3 bg-white  shadowDesc" 
                        id={dynamcData._id}
                        draggable="true" onDragStart={(event)=>this.drag(event)}> 


                        <div className="fonts">
                        <b>{dynamcData.title}</b>
                        <p>{dynamcData.desc}</p>
                        <span className="glyphicon glyphicon-ok-sign icon"></span>
                        <span className="dot"></span>
                        <p className="smallText">pmt-2</p>
                        <p>{dynamcData.status}</p>
                        <p>{dynamcData._id}</p>

                        </div>
                        </div>
                        )
                  )

      }
    

      render() {

            return (

                  <div>

                  <div className="body">
                  <MuiThemeProvider>
                  <div className="container">

                  <div className="row ">

                  <TextField className="searchText" hintText="Search text goes hear"
                  floatingLabelText="Search"  />

                  </div>

                  <div className="row">


                  <div className="column" id="div11" 
                  onDrop={(event)=>this.drop(event)} 
                  onDragOver={(event)=>this.allowDrop(event)}> 
                  <div className="shadow">
                  <div className="shadow p-3 mb-3 text-black shadowText">
                  <div>TODO </div>  
                  </div>
                  {this.show()}
                  </div>
                  </div>


                  <div className="column" id="div2" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)}>
                  <div className="shadow">
                  <div className="shadow p-3 mb-3   text-black shadowText">
                    <div>IN PROGRESS </div>  
                  

                  </div>          
                  </div>
                  </div>


                  <div className="column" id="div5" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)}>
                  <div className="shadow">
                  <div className="shadow p-3 mb-3  text-black shadowText">
                    <div>TESTING </div> 
                  

                  </div>
                  </div>
                  </div>


                  <div className="column" id="div8" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)}>
                  <div className="shadow">
                  <div className="shadow p-3 mb-3   text-black shadowText">
                  <div>DONE </div> 
                  

                  </div>
                  </div>
                  </div>


                  <div className="modal " id="myModal">
                  <div className="modal-dialog ">
                  <div className="modal-content">
                  <div className="modal-header fixed-header">
                  <h4 className="modal-title">Modal title</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>

                  <div className="modal-body">
                  <div class="row">
                  <span className="dot"></span>
                  <span className="donContent"><b>Time must be shown for each task/bug/issue</b></span>
                  </div>
                  <div className="row">
                  <p className="task">There must be no refresh. 
                  As soon as the response from the request of update status of task is received as successful, the required changes shall be done locally on the object and the server response should not be rendered as a whole.
                  </p>
                  </div>
                  <div className="row box">
                  <div className="col-12 col-md-4">
                  <p><b>Created By:</b> Thirthraj Barot</p>
                  <p><b>Created Date:</b> 8/3/2019, 10:00 AM</p>
                  <p><b>Status:</b> in progress</p>
                  </div>
                  <div className="col-12 col-md-4">
                  <p><b>Assign To:</b> Mehul Bhatt</p>
                  <p><b>Prority:</b> medium</p>

                  </div>
                  <div className="col-12 col-md-4">
                  <p>start time end time </p>
                  </div>  
                  <div className="row buttonRow">
                  <div className="col-sm-8">
                  <button className="btn btn-default">Remove assignment</button> 
                  <button className="btn btn-default">Move to testing</button> 
                  </div>
                  <div className="col-sm-2">

                  </div>
                  <div className="col-sm-2 edit">
                  <button className="btn btn-default"  onClick={() => this.openModal()}>Edit</button> 

                  </div>
                  </div>
                  </div>
                  </div>
                  <div className="modal-footer">

                  <h1>Comments</h1>
                  <h4>No comments on this be the first one to comments on...</h4>

                  <div className="row">
                  <CKEditor
                  editor={ ClassicEditor }
                  data="<p>Hello from Happy</p>"
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
                  <div className="container">
                  <Modal className="modelsecond" visible={this.state.visible}  effect="fadeInUp" onClickAway={() => this.closeModal()}>

                  <div className="editModel">


                  <div className="modal-header">
                  <h4 className="modal-title">Edit Item</h4>
                  <button type="button" className="close" onClick={() => this.closeModal()}>&times;</button>


                  </div>
                  <div className="row firstRowcontent">
                  
                  <TextField className="titleText" hintText="Title of task"
                  floatingLabelText="Title"  />
                  <TextField className="titleText" hintText="Task discription"
                  floatingLabelText="Discription"  />
                  </div>
                  <a href="#" class="btn btnAddfiles btn-lg">
                  <span class="glyphicon glyphicon-paperclip"></span> Add Files 
                  </a>

                  <div className="row">
                  <div className="col-sm-6 selectNames">
                  <h4>Assign To</h4>
                  <select value={this.state.value1} onChange={this.onChange.bind(this)} className="form-control">
                  <option value="select">Happy Bhalodiya</option>
                  <option value="First">Komal Sakhiya</option>
                  <option value="Second">Foram Trada</option>
                  <option value="Third">Ruchi Bhalodiya</option>
                  </select>
                  </div>
                  <div className="col-sm-6 selectNames" >
                  <h4>Priority</h4>
                  <select value={this.state.value2} onChange={this.onChange2.bind(this)} className="form-control">
                  <option value="select">Low</option>
                  <option value="First">Medium</option>
                  <option value="Second">High</option>

                  </select>
                  </div>  
                  </div>

                  <TextField className="searchText days" hintText="1"
                  floatingLabelText="Due Days"  type="number"/>



                  <div className="row statusDropdown">
                  <h4>Status</h4>
                  <select disabled value={this.state.value3} onChange={this.onChange3.bind(this)} className="form-control">
                  <option value="select" disabled>In Progress</option>
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

