const mongoose = require("mongoose");
const Ship = mongoose.model(process.env.SHIP_MODEL);


const _runGeoQuery = (req,res,offset,count) =>{
    const lng = parseFloat(req.query.lng);
    const lat = parseFloat(req.query.lat);
    // const distance = parseInt(req.query.distance) || process.env.GEO_SEACH_MAX_DIST;

    const point={
        type:"point",
        coordinates:[lng,lat]
    }
    const query={
        "coordinates":{
            $near:{
                $geometry:point,
                $maxDistance:parseInt(process.env.GEO_MAX_DIST,10),
                $minDistance:parseInt(process.env.GEO_MIN_DIST,10),
            }
        },
    }
    Ship.find(query).skip(offset).limit(count).exec((err,ship)=>{
        if(err){
            res.status(200).json(err);
        }
        else{
            res.status(200).json(ship);
        }
    })

    
}
const getAll = function (req, res) {
    let offset = parseInt(process.env.DEFAULT_FIND_OFFSET,10);
    let count = parseInt(process.env.DEFAULT_FIND_COUNT,10);

    if(req.query && req.query.count){
        count = parseInt(req.query.count,10);
    }
    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset,10);
    }
    if(req.query && req.query.lat && req.query.lng){
        _runGeoQuery(req,res,offset,count);
        return;
    }
    Ship.find().skip(offset).limit(count).exec(function (err, ships) {
        const response = {
            status: parseInt(process.env.REST_API_OK, 10),
            message: ships
        };
        if (err) {
            response.status= parseInt(process.env.REST_API_SYSTEM_ERROR, 10);
            response.message= err;
        }
        res.status(response.status).json(response.message);
    });
}

const getOne = function (req, res) {
    const shipId = req.params.shipId;
    Ship.findById(shipId).exec(function (err, ship) {
        const response = {
            status: parseInt(process.env.REST_API_OK, 10),
            message: ship
        };
        if (err) {
            response.status = parseInt(process.env.REST_API_SYSTEM_ERROR, 10);
            response.message = err;
        } else if (!ship) {
            response.status = parseInt(process.env.REST_API_RESOURCE_NOT_FOUND_ERROR, 10);
            response.message = {
                "message": process.env.REST_API_RESOURCE_NOT_FOUND_MESSAGE
            };
        }
        res.status(response.status).json(response.message);
    });
}

module.exports = {
    getAll: getAll,
    getOne: getOne
};