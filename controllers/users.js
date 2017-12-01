const knex = require("../db/knex.js");

module.exports = {
  // GET ALL
  getAll: function(req, res) {
    knex('users').then((result) => {

      res.json(result)
    })
    .catch((err) => {
      console.error(err)
    });
  },

  // GET ONE
  getOne: function(req, res){
    knex('users')
      .where('id', req.params.id)
      .then((result)=>{

        res.json(result[0]);
      })
      .catch((err) => {
        console.error(err)
      });
  },

  // CREATE
  create: function(req, res){

    knex('users')
      .insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        age: req.body.age
      }, "*")
      .then((result)=>{
        console.log(result);
        res.sendStatus(200);
      })
      .catch((err) => {
        console.error(err)
      });

  },

  //DELETE
  delete: function(req, res){

    knex('users')
      .del()
      .where('id', req.params.id)
      .then(()=>{

        res.sendStatus(200);
      })
      .catch((err) => {
        console.error(err)
      });
  },

  //EDIT
  edit: function(req, res){
    knex('users')
      .where('id', req.params.id)
      .then((result)=>{

        res.sendStatus(200);
      })
      .catch((err) => {
        console.error(err)
      });
  },

  //UPDATE
  update: function(req, res){
    knex('users')
      .update(req.body)
      .where('id', req.params.id)
      .then(()=>{

        res.sendStatus(200);
      })
      .catch((err) => {
        console.error(err)
      });
  }
}
