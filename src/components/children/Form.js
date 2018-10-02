import React from 'react';
 
const Form = React.createClass({

//}),

    render() {

        return(
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h2>"panel-title text-cneter><strong>Search</strong></h2>
                </div>
                
                <div className="panel-body text-center">
                    <form>
                        <div className="form-group">
                            <h4> className=""><strong>Topic</strong></h4>
                            <input type="text" className="form-control text-center" id="topic"/>
                            <br />
                            <h4 className=""><strong>Start Year</strong></h4>
                            <input type="text" className="form-control text-center" id="startYear"/>
                            <br/>
                            <h4 className=""><strong>End Year</strong></h4>
                            <input type="" className="form-control text-center" id ="endYear" />
                            <br />
                            <button type="button" className="btn btn-primary">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});

export default Form;
