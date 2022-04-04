const mongoose = require("mongoose");
const Actor = mongoose.model(process.env.ACTOR_MODEL);

const getAllActors = (req, res) => {
  let offset = parseInt(process.env.DEFAULT_FIND_OFFSET, 10);
  let count = parseInt(process.env.DEFAULT_FIND_COUNT, 10);
  const maxCount = parseInt(process.env.DEFAULT_MAX_FIND_LIMIT, 10);

  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  if (req.query && req.query.count) {
    offset = parseInt(req.query.count, 10);
  }
  if (isNaN(offset) || isNaN(count)) {
    res.status(400).json({ "message": "QueryString Offset and Count should be numbers" });
    return;
  }
  if (count > maxCount) {
    res.status(400).json({ "message": "Cannot exceed count of " + maxCount });
    return;
  }

  Actor.find()
    .skip(offset)
    .limit(count)
    .exec((err, actor) => {
      const response = {
        status: 200,
        message: actor
      };
      if (err) {
        response.status = 500;
        response.message = err;
      }
      else if (!actor) {
        response.status = 404;
        response.message = { "message": `no Actors available bro` };
      }
      res.status(response.status).json(response.message);
    });
};

const getActor = (req, res) => {
  const actorId = req.params.actorId;
  Actor.findById(actorId).exec((err, actor) => {
    const response = {
      status: 200,
      message: actor
    };
    if (err) {
      response.status = 500;
      response.message = err;
    }
    else if (!actor) {
      response.status = 404;
      response.message = { "message": `Actor with ID:${actorId} not found` };
    }
    res.status(response.status).json(response.message);
  });
};

const addActor = (req, res) => {
  const newActor = {
    name: req.body.name, year: req.body.year,
    movies: req.body.movies
  };
  Actor.create(newActor, (err, actor) => {
    const response = { status: 201, message: actor };
    if (err) {
      response.status = 500;
      response.message = err;
    }
    res.status(response.status).json(response.message);
  });
}


const fullUpdateActor = (req, res) => {
  console.log("Full Update One Game Controller");
  actorUpdate = (req, res, actor, response) => {
    actor.name = req.body.name;
    actor.year = req.body.year;
    actor.movies = req.body.movies;
    actor.save((err, updatedActor) => {
      const response ={
        status : 500,
        message : []
      }
      if (err) {
        response.status = 500;
        response.message = err;
      }else{
        response.status = 204;
        response.message = updatedActor;
      }
      res.status(response.status).json(response.message);
    });
  }
  _updateOne(req, res, actorUpdate);
}

const _updateOne = function (req, res, updateActorCallback) {
  console.log("Update One actor Controller");
  const actorId = req.params.actorId;
  Actor.findById(actorId).exec(function (err, actor) {
    const response = { status: 204, message: actor };
    if (err) {
      console.log("Error finding actor");
      response.status = 500;
      response.message = err;
    } else if (!actor) {
      console.log("actor id not found");
      response.status = 404;
      response.message = { "message": "actor ID not found" };
    }
    if (response.status !== 204) {
      res.status(response.status).json(response.message);
    } else {
      updateActorCallback(req, res, actor, response);
    }
  });
}

// const partialUpdateActor = function (req, res) {
//   console.log("Full Update One Actor Controller");
//   actorUpdate = function (req, res, actor, response) {
//     console.log(req.body.name);
//     if (req.body.name) { actor.name = req.body.name; }
//     if (req.body.year) { actor.year = req.body.year; }
//     if (req.body.designers) { actor.designers = req.body.designers; }
//     actor.save(function (err, updatedActor) {
//       if (err) {
//         response.status = 500;
//         response.message = err;
//       }
//       res.status
//         (response.status).json
//         (response.message);
//     });
//   }
//   _updateOne(req, res, actorUpdate);
// }


const deleteActor = (req, res) => {
  const actorId = req.params.actorId;
  Actor.findByIdAndDelete(actorId).exec((err, deletedActor) => {
    const response = { status: 204 , message: deletedActor };
    if (err) {
      console.log("Error finding Actor");
      response.status = 500;
      response.message = err;
    } else if (!deletedActor) {
      console.log("Actor id not found");
      response.status = 404;
      response.message = {
        "message": "Actor ID not found"
      };
    }
    res.status(response.status).json(response.message);
  });
}
module.exports = {
  getAllActors,
  getActor,
  addActor,
  deleteActor,
  fullUpdateActor,
  // partialUpdateActor
};
