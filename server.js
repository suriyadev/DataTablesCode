var data = [ {"date1" : "2019-12-27" , "date2" : "2019-12-28" },
{"date1" : "2019-11-27" , "date2" : "2019-12-28" },
{"date1" : "2019-05-27" , "date2" : "2019-12-28" },
{"date1" : "2019-03-27" , "date2" : "2019-09-28" },
{"date1" : "2019-01-27" , "date2" : "2019-12-28" },
{"date1" : "2019-09-27" , "date2" : "2019-02-28" },
{"date1" : "2019-09-27" , "date2" : "2019-12-28" }]

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: '+data.length+'  ' + port);

app.get('/search', function(req, res) {
	 var key = req.query.date1;
	 var key2 = req.query.date2;
	 
	 
    var result = [];
	if( key != "" ){
   for(var name in data){	
		if(data[name].date1 == key || data[name].date1 == key2 ||
		data[name].date2 == key || data[name].date2 == key2)
				result.push(data[name]);
   
	} }
		res.json({  
    data: result
  });
 
  
});

var path = require('path');
app.get('/', function(req, res) {
	  
	 res.sendFile(path.join(__dirname + '/index.html'));
 
  
});
