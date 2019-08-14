const express     = require('express');
const bodyParser  = require('body-parser'); 
const app         = express();
var neo4j         = require('neo4j');
var db = new neo4j.GraphDatabase('https://hobby-ojdakgemcbdegbkegjhkkldl.dbs.graphenedb.com:24786');
//server running on port 8000

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
	db.cypher({
		query: 'MATCH (from: Loc {name: {from}}), (to: Loc {name: {to}}),paths = allShortestPaths((from)-[:CONNECTED_TO*]-(to)) WITH REDUCE(dist = 0, rel in rels(paths) | dist + rel.distance) AS distance, paths RETURN nodes(paths) as data, paths, distance ORDER BY distance LIMIT 1',
		params: {
			from: fromLocation,
			to: toLocation,
		},
	}, function (err, results) {
    	if (err) throw err;
    	var result = results[0];
		if (!result) {
			res.send({error: "Maybe we are not able to find the room ?"})
		} else {
			res.send(result);
		}
	});
});
