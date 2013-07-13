/*

/data/v1/
	ad_contributors/user_id/38176500

*/

var express = require('express');
var ChScotUniformApi = require('./ChScotUniformApi.js');

var api = new ChScotUniformApi();

var app = express();
var pjson = require('./package.json');
var apiVersion = pjson.version;
var dataUrl = "/data/"+apiVersion

app.get( '/', api.root );
app.get( dataUrl+"/", function(req,res){api.viewAllDatasets(req,res);} );
app.get( dataUrl+"/:dataset/", function(req,res){api.viewDataset(req,res);} );




//app.get( dataUrl+"/:dataset/q/:searchTerm", api.doSearch );
//app.get( dataUrl+"/:dataset/:field/:value/", api.lookupValue );

app.listen(process.env.PORT || 8080);
