module.exports = function(app) {

  app.get('/artistName', function(req, res){
    res.json({name: 'Artist Name'});
  });

  

}
