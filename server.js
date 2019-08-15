const express     = require('express');
const bodyParser  = require('body-parser'); 
const app         = express();
var neo4j         = require('neo4j');
var Request       = require('request');

//accessing NEO4J over REST
var dbURI         = "https://hobby-ojdakgemcbdegbkegjhkkldl.dbs.graphenedb.com:24780/db/data/transaction"

//binding to port 5000
app.listen(process.env.PORT || 5000)
//to catch request parameters (Get/Post/Put/Delete)
app.use(bodyParser.urlencoded({extended: true}));
//to enable the use of directory public
app.use(express.static('public'));
//using EJS (embedded javascript to display views
app.set('view engine', 'ejs')
//routing starts
app.get('/', function(req, res){
	res.render('getnode.ejs');
});
//get request to fetch the path, nodes and overall cost/distance
app.get('/getnodes', function(req, res){
	fromLocation = parseInt(req.query.from);
	toLocation = parseInt(req.query.to);
	//consuming NEO4J REST API through cURL. 
	Request.post({
    			"headers": { "content-type": "application/json", "Authorization": "Basic bmVvNGo6Yi5FRmgyc3hxbzVlQTkuZHVWOHF2T0ZubE9zUnlmcw=="},
    			"url": dbURI,
    			"body": JSON.stringify({
				  "statements": [
				    {
				      "statement": "MATCH (from: Loc {name: {from}}), (to: Loc {name: {to}}),paths = allShortestPaths((from)-[:CONNECTED_TO*]-(to)) WITH REDUCE(dist = 0, rel in rels(paths) | dist + rel.distance) AS distance, paths RETURN nodes(paths) as data, paths, distance ORDER BY distance LIMIT 1",
				      "parameters": {"from": fromLocation, "to": toLocation},
				      "resultDataContents": [
					"row",
					"graph"
				      ],
				      "includeStats": true
				    }
				  ]
    		})
	}, (error, response, body) => {
		if(error) {
			return console.dir(error);
		}
		var result = JSON.parse(body);
		if (!result) {
			res.send({error: "Maybe we are not able to find the room ?"})
		} else {
			res.send(result);
		}
	});
});
