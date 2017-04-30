var MongoClient= require("mongodb").MongoClient;

var state = { // все данные необходимые для работы с бд
  db: null
};

exports.connect = function(url , done){
  if (state.db){
    return done();
  }
  MongoClient.connect(url, function(err, db){
    if (err){
      return done(err);
    }
    state.db = db;
    done();
  })
}

exports.get = function(){
  return state.db;
}
