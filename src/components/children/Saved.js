import React from 'react';
import { PromiseProvider } from 'mongoose';

//this is the saved component.  it will be used to show a log of saved articles
class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    //the delete function is expecting an object as argument
    clickToDelete =(i)  => {
        console.log(i);
        this.props.deleteArticles(this.props.SavedArticles[i])
        }

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
                    { 
                        this.props.SavedArticles ?

                            this.props.SavedArticles.map((obj, i) =>{

                                <div className="saved-items" key={i}>
                                <a href={obj.url} target="_blank">{obj.title}</a>
                                <br />
                                {obj.date}
                                <br />
                                <button type="button" className="btn btn-warning" style={{'float': 'right', 'marginTop': '-39px'}}
                                onClick={ () => this.clickToDelete(i)}>
                                Delete
                                </button>
                                </div>
                                })
                                :
                                ''

                        
                        
                    
                    }
                    </div>
                
                        
                 
                 </div>
                  )
               
    }
}

    export default Saved;
 
