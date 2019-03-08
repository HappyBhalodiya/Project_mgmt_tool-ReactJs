import React ,{ Component} from "react";
import "./App.css";
import { Actions } from 'react-router-flux';
import { Button ,Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import cors from 'cors';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


// import Modal from 'ReactBootstrap.Modal';
export default class MainScreen extends  Component{


  allowDrop(ev) {
    ev.preventDefault();
  }
  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  render() {
    return (
      <div className="body">
  

      <MuiThemeProvider>
      <div className="container">

      <div className="row ">

      <TextField className="searchText" hintText="Search text goes hear" floatingLabelText="Search" onChange = {(event,newValue) => this.setState({username:newValue})} />

      </div>
      <div className="row">

      <div className="column" id="div2" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)}>
      <div className="shadow">
      <div className="shadow p-3 mb-3 text-black shadowText">
      <div>TODO </div>  
      </div>
      <div data-toggle="modal" data-target="#myModal" className="text-black shadow p-3 mb-3 bg-white  shadowDesc" id="div1" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)} draggable="true" onDragStart={(event)=>this.drag(event)}>
      <div className="fonts"><b>Estimated Time should be an optional value which will be set after clicking a checkbox of ADD ESTIMATED TIME.</b>
      <p>Estimated Time should be an optional value which will be set after clicking a checkbox of ADD ESTIMATED TIME.</p>
      <p className="timeText">2 days ago</p>
      <span className="glyphicon glyphicon-ok-sign icon" ></span>
      <span className="dot"></span>
      <p className="smallText">pmt-2</p>

      </div>
      </div>
      <div data-toggle="modal" data-target="#myModal" className="text-black shadow p-3 mb-3 bg-white  shadowDesc" id="div1" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)} draggable="true" onDragStart={(event)=>this.drag(event)}>
      <div className="fonts"><b>Estimated Time should be an optional value which will be set after clicking a checkbox of ADD ESTIMATED TIME.</b>
      <p>Estimated Time should be an optional value which will be set after clicking a checkbox of ADD ESTIMATED TIME.</p>
      <p className="timeText">2 days ago</p>
      <span className="glyphicon glyphicon-ok-sign icon" ></span>
      <span className="dot"></span>
      <p className="smallText">pmt-2</p>

      </div>
      </div>

      </div>
      </div>

      <div className="column" id="div2" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)}>
      <div className="shadow">
      <div className="shadow p-3 mb-3   text-black shadowText">
      <div>IN PROGRESS </div>  
      </div>
      <div data-toggle="modal" data-target="#myModal" className="text-black shadow p-3 mb-3 bg-white  shadowDesc" id="div1" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)} draggable="true" onDragStart={(event)=>this.drag(event)}>
      <div className="fonts"><b>Estimated Time should be an optional value which will be set after clicking a checkbox of ADD ESTIMATED TIME.</b>
      <p>Estimated Time should be an optional value which will be set after clicking a checkbox of ADD ESTIMATED TIME.</p>
      <p className="timeText">2 days ago</p>
      <span className="glyphicon glyphicon-ok-sign icon" ></span>
      <span className="dot"></span>
      <p className="smallText">pmt-2</p>

      </div>
      </div>
      <div data-toggle="modal" data-target="#myModal" className="text-black shadow p-3 mb-3 bg-white  shadowDesc" id="div1" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)} draggable="true" onDragStart={(event)=>this.drag(event)}>
      <div className="fonts"><b>Estimated Time should be an optional value which will be set after clicking a checkbox of ADD ESTIMATED TIME.</b>
      <p>Estimated Time should be an optional value which will be set after clicking a checkbox of ADD ESTIMATED TIME.</p>
      <p className="timeText">2 days ago</p>
      <span className="glyphicon glyphicon-ok-sign icon" ></span>
      <span className="dot"></span>
      <p className="smallText">pmt-2</p>

      </div>
      </div>
      </div>
      </div>

      <div className="column" id="div2" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)}>
      <div className="shadow">
      <div className="shadow p-3 mb-3  text-black shadowText">
      <div>TESTING </div>  
      </div>

      <div data-toggle="modal" data-target="#myModal"  className="text-black shadow p-3 mb-3 bg-white  shadowDesc" id="div1" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)} draggable="true" onDragStart={(event)=>this.drag(event)}>
      <div className="fonts"><b>Estimated Time should be an optional value which will be set after clicking a checkbox of ADD ESTIMATED TIME.</b>
      <p>Estimated Time should be an optional value which will be set after clicking a checkbox of ADD ESTIMATED TIME.</p>
      <p className="timeText">2 days ago</p>
      <span className="glyphicon glyphicon-ok-sign icon" ></span>
      <span className="dot"></span>
      <p className="smallText">pmt-2</p>

      </div>
      </div>
      <div data-toggle="modal" data-target="#myModal" className="text-black shadow p-3 mb-3 bg-white  shadowDesc" id="div1" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)} draggable="true" onDragStart={(event)=>this.drag(event)}>
      <div className="fonts"><b>Estimated Time should be an optional value which will be set after clicking a checkbox of ADD ESTIMATED TIME.</b>
      <p>Estimated Time should be an optional value which will be set after clicking a checkbox of ADD ESTIMATED TIME.</p>
      <p className="timeText">2 days ago</p>
      <span className="glyphicon glyphicon-ok-sign icon" ></span>
      <span className="dot"></span>
      <p className="smallText">pmt-2</p>

      </div>
      </div>
      </div>
      </div>

      <div className="column" id="div2" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)}>
      <div className="shadow">
      <div className="shadow p-3 mb-3   text-black shadowText">
      <div>DONE </div>  
      </div>
      <div data-toggle="modal" data-target="#myModal" className="text-black shadow p-3 mb-3 bg-white  shadowDesc" id="div1" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)} draggable="true" onDragStart={(event)=>this.drag(event)}>
      <div className="fonts"><b>Estimated Time should be an optional value which will be set after clicking a checkbox of ADD ESTIMATED TIME.</b>
      <p>Estimated Time should be an optional value which will be set after clicking a checkbox of ADD ESTIMATED TIME.</p>
      <p className="timeText">2 days ago</p>
      <span className="glyphicon glyphicon-ok-sign icon" ></span>
      <span className="dot"></span>
      <p className="smallText">pmt-2</p>

      </div>
      </div>
      <div data-toggle="modal" data-target="#myModal" className="text-black shadow p-3 mb-3 bg-white  shadowDesc" id="div1" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)} draggable="true" onDragStart={(event)=>this.drag(event)}>
      <div className="fonts"><b>Estimated Time should be an optional value which will be set after clicking a checkbox of ADD ESTIMATED TIME.</b>
      <p>Estimated Time should be an optional value which will be set after clicking a checkbox of ADD ESTIMATED TIME.</p>
      <p className="timeText">2 days ago</p>
      <span className="glyphicon glyphicon-ok-sign icon" ></span>
      <span className="dot"></span>
      <p className="smallText">pmt-2</p>

      </div>
      </div>
      </div>
      </div>


      </div> 
      <div className="modal" id="myModal">
      <div className="modal-dialog  modal-xl">
      <div className="modal-content">


      <div className="modal-header">
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
      <button className="btn btn-default">Edit</button> 
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
        // You can store the "editor" and use when it is needed.
        console.log( 'Editor is ready to use!', editor );
      } }
      onChange={ ( event, editor ) => {
        const data = editor.getData();
        console.log( { event, editor, data } );
      } }
      onBlur={ editor => {
        console.log( 'Blur.', editor );
      } }
      onFocus={ editor => {
        console.log( 'Focus.', editor );
      } }
      />
      </div>
      <div className="row">
      <button className="btn btn-default addcomment">Add comment</button> 
      </div>
      <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-sm-4">
      <button className="btn btn-default" data-dismiss="modal">close</button> 
      <button className="btn btn-default">save change</button> 
      </div>
      <div className="col-sm-4"></div>
      </div>

      </div>

      </div>
      </div>
      </div>

      </div>

      </MuiThemeProvider>
      </div>


      );
}

}
const style = {
  margin: 15,
};


// <Modal show={this.props.showModal} onHide={this.close}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h4>Text in a modal</h4>
//           <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

//           <h4>Popover in a modal</h4>


//           <hr />

//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={this.close}>Close</Button>
//         </Modal.Footer>
//       </Modal>
