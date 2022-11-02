import React, { Component } from 'react'
import SideNav from '../Pages/SideNav'
import bootstrap from 'bootstrap'
import { faDiagramSuccessor } from '@fortawesome/free-solid-svg-icons';
export default class Addreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            
            errorMessage: ''
        }}
    success()
    {
        this.setState({errorMessage:'Comment submitted successfully !'})
    }
  render() {
    return (
        <div id="wrapper">

    

        <div id="content-wrapper" class="d-flex flex-column">

    <SideNav/>

    <div className='content'>
        <form style={{marginLeft:'400px',width:'800px',fontWeight:'800',fontSize:'16px'}} onSubmit={(e) => {e.preventDefault();this.success()}}>
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Comment</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="col-auto my-1">
      <label class="mr-sm-2" for="inlineFormCustomSelect">Stars</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  
    <div class="col-auto my-1">
      <input type="submit" class="btn btn-primary"  value="Submit"/>
      {
                                                        this.state.errorMessage !== '' ?
                                                            <div className="mt-3 alert alert-success">
                                                                {this.state.errorMessage}
                                                            </div>
                                                            :
                                                            <div></div>
                                                    }
   
    </div>
</form>
    </div>
    </div>
    </div>
    )
  }
}
