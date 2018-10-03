import React from 'react';
import { PromiseProvider } from 'mongoose';

//this is the saved component.  it will be used to show a log of saved articles
const Saved = React.createClass({

    //the delete function is expecting an object as argument
    clickToDelete(i) {

        this.props.deleteArticles(this.props.SavedArticles[i])
        },

        //here we render the function
        render() {
            const that = this;
            console.log(this.props.SavedArticles)
            return(

                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title text-center"><strong>Saved Articles</strong></h3>
                    </div>
                    <div className="panel-body">
                        {that.props.SavedArticles.map((obj, i) =>

                    <div className="saved-items" key={i}><a href={obj.url} target="_blank">{obj.title}</a>
                    <br />
                    {obj.date}
                    <br />
                    <button type="button" className="btn btn-warning" style={{'float': 'right', 'marginTop': '-39px'}}
                    onClick={that.clickToDelete.bind(that, i)}>Delete</button></div>)}
                    </div>
                </div>
            )
        }

    });

    //export component back for use in other files
    export default Saved;
