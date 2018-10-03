import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//here are the subcomponents
import Form from './children/Form';
import Results from './children/Results';
import Saved from './children/Saved';

//helper function
import facilitator from  './utils/facilitator'

//import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


const Main = React.createClass({

    //generic state ass. w/# of clicks
    getInitialState() {
        return {
            topic: "",
            startYear: "",
            endYear: "",
            results: [],
            savedArticles: [],
        }
    },
    
    //this function allows children to update the parent w/searchTerms
        setTerm(tpc, stYr, endYr) {
            this.setState({
                topic: tpc,
                startYear: stYr,
                endYead: endYr
            })
        },

        deleteArticles(article) {
            console.log(article);
            axios.delete(`/api/saved/${article._id}`)
                .then( response => {
                    this.setState({
                        savedArticles: response.data
                    });
                    return response;
                });

                this.getArticle();
            },

        getArticle() {
            axios.get('/api/saved')
                .then( response => {
                    this.setState({
                        savedArticles: response.data
                    });
                });
        },

        savedArticles(title, date, url) {
            facilitator.postArticle(title, data, url)
            console.log("saved articles")
            console.log(this.state.savedArticles)
            this.getArticle()
        },

        //if component updates run this code
    componentDidUpdate(prevProps, preState) {

        if(prevState.topic !=this.state.topic || prevState.startYear !== this.state.startYear || prevState.endYear !== this.state.endYear) {
            console.log("UPDATED");

            facilitator.runQuery(this.state.topic, this.state.startYear, this.state.endYear)
                .then(data => {
                    console.log(data);
                    if (data !== this.state.results) 
                    {
                        this.setState({
                            results: data
                        })
                    }
                    console.log(this.state.results)
                })
        }
    },

    componentDidMount() {
        console.log("saved")
        console.log(this.state. savedArticles)
        this.getArticle()
    },

    //here we render the function

    render() {
        return(

            <div className="container">

                <div className="row">

                    <div className="jumbotron">
                        <h2 className="text-center">New York Times Search</h2>
                        <p className="text-center">Search And Save Article</p>
                    </div>

                </div>
                
                <div className="row">
                    <Form setTerm={this.setTerm}/>
                </div>

                <div className="row">
                    <Results results={this.state.results} savedArticles = {this.savedArticles} />
                </div>

                <div className ="row">
                    <Saved savedArticles={this.state.savedArticles} deleteArticles={this.deleteArticles} />
                </div>


            </div>
        )
    }

});

export default Main;
