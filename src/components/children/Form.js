import React from 'react';
import API from '../utils/facilitator'

class Form extends React.Component {

   
    
    state = {
        updateTopic: "",
        topic :"",
        startYear : "",
        EndYear : ""
    }
        

    updateTopic = (event) => {
        const {value, name} = event.target;
        console.log(event.target.value);
        this.setState({[name] : value });
        

    }
    
    submit = () => {
        const {topic, startYear, EndYear} = this.state;
        const data = API.runQuery(topic, startYear, EndYear)
            
        /// you are going to take info from state
        //create an obj
        // send to server with azios

    }

    render() {

        return(
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h2 className ="panel-title text-center"><strong>Search</strong></h2>
                </div>
                
                <div className="panel-body text-center">
                    <form>
                        <div className="form-group">
                            <h4> <strong>Topic</strong></h4>
                            <input type="text" value={this.state.topic} onChange={this.updateTopic} className="form-control text-center" name="topic"/>
                            <br />
                            <h4 className=""><strong>Start Year</strong></h4>
                            <input type="text" value={this.state.startYear} onChange={this.updateTopic} className="form-control text-center" name="startYear"/>
                            <br/>
                            <h4 className=""><strong>End Year</strong></h4>
                            <input type="" value={this.state.EndYear} onChange={this.updateTopic} className="form-control text-center" name="EndYear" />
                            <br />
                            <button type="button" onClick={this.submit} className="btn btn-primary">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

export default Form;
