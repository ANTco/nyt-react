import React from 'react';
 
class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topic :"",
            startYear : "",
            EndYear : ""
        }
        this.updateTopic = this.updateTopic.bind(this);
    }
    updateTopic(event){
        this.setState({topic : event.target.value });
        console.log(this.state.topic);

    }
    
    submit(){
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
                            <input type="text" value={this.state.updateTopic} onChange={this.updateTopic} className="form-control text-center" id="topic"/>
                            <br />
                            <h4 className=""><strong>Start Year</strong></h4>
                            <input type="text" value={this.state.updateStart} onChange={this.updateStart} className="form-control text-center" id="startYear"/>
                            <br/>
                            <h4 className=""><strong>End Year</strong></h4>
                            <input type="" value={this.state.End} onChange={this.updateEnd} className="form-control text-center" id ="endYear" />
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
