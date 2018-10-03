import axios from 'axios';

const APIKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

//facilitator functions

const facilitator = {

    runQuery(term, start, end) {

        var term =term.trim();

        var start = `${start.trim()}0101`;

        var end = `${end.trim()}1231`;

        console.log("Query Run");

        return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params: {
                'api-key': APIKey,
                'q':term,
                'begin_date': start,
                'end_date': end
            }
        })
        .then(results => {
            console.log("here are the results")
            console.log(results)

            const newResults = [];

            //we do results.data because axios returns 
            //a obj as results and 'data' is a key on the obj 
            const fullResults = results.data.response.docs;
            let counter = 0;

            //gets 1st 5 articles that have all 3 components
            for (let i =0; i < fullResults.length; i++) {
                if (counter > 4) {
                    return newResults;
                }

                if (fullResults[counter].headline.main && fullResults[counter].pub_date && fullResults[counter].web_url)
                {
                    newResults.push(fullResults[counter]);
                    counter++;
                }
            }

            return newResults;
        })
    },

    postArticle(title, data, url) {
        axios.post('/api/saved', {title, Date, url})
        .then(results => {

            console.log("Posted to Mongod");
            return(results);
        })
    },
};

export default facilitator;