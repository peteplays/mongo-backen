var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoOp     = require("./models/mongo"),
    router      = express.Router(),
    port        = 4444;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


router.get("/",function(req,res){
    res.json({"msg" : "Mongo is doing the thing"});
});

router.route("/getPatient/:patientId")
    .get(function(req,res){
        var response = {},
            patientId = req.params.patientId,
            find = {"_id" : patientId};

        mongoOp.findOne(find,function(err,data){
            if(err) {
                response = {"status" : "error", "error" : "Error fetching data"};
            } else {
                response = {"status" : "ok", "data" : data};
            }
            res.json(response);
        });
    });

router.route("/getAll")
    .get(function(req,res){
        var response = {};
        mongoOp.find({},function(err,data){
            if(err) {
                response = {"status" : "error", "error" : "Error fetching data"};
            } else {
                response = {"status" : "ok", "data" : data};
            }
            res.json(response);
        });
    });

router.route("/listPatients/:pageNumber/:perPage")
    .get(function(req,res){
        var response = {};
        mongoOp .find()
                .limit(req.params.perPage)
                .skip(req.params.pageNumber * req.params.perPage)
                .exec(function(err, data) {
            if(err) {
                response = {"status" : "error", "error" : "Error fetching data"};
            } else {
                response = {"status" : "ok", "data" : data};
            }
            res.json(response);
        });
    });

router.route("/updateAddPatient/")
    .post(function(req,res){
        var response = {},
            data     = req.body,
            find     = data.find,
            update   = data.update,
            upsert   = { upsert: true };
        mongoOp.findOneAndUpdate(find, update, upsert, function(err, data) {
            if(err) {
                response = {"status" : "error", "error" : "Error fetching data"};
            } else {
                response = {"status" : "ok", "data" : data};
            }
            res.json(response);
        });
    });

router.route("/count")
    .get(function(req,res){
        var response = {};
        mongoOp.count({}, function( err, count){
            if(err) {
                response = {"status" : "error", "error" : true,"message" : "Error fetching data"};
            } else {
                response = {"status" : "ok", "count" : count};
            }
            res.json(response);
        });
    });


app.use('/',router);

app.listen(port);
console.log("Mongo running on http://localhost:" + port);
