// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
(function() {
	//app properties
	Ti.Filesystem.remoteBackup = false;
	Ti.Database.remoteBackup = false;
	
	//bootstrap the database
	var db = Ti.Database.open('MWG');
	db.execute('CREATE TABLE IF NOT EXISTS locations(id INTEGER PRIMARY KEY, name TEXT, plant TEXT, latitude REAL, longitude REAL, createDate TEXT, lastUpdateDate TEXT);');
	db.close();
})();

