const asyncHandler = require('express-async-handler')
const db =require('../models')
const Biodata = db.biodata;
const Op = db.Sequelize.Op;


// @desc create new biodata
// @Route Post /api/biodata
// @acces private
const createNewBiodata = asyncHandler(async(req, res) => {
    if (!req.body.nama) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      const biodataObject = {
        nama: req.body.title,
        tempat_lahir: req.body.tempat_lahir,
        tanggal_lahir: req.body.tanggal_lahir ,
        Alamat: req.body.Alamat
      };

    Biodata.create(biodataObject)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Biodata."
      });
    });
});

// Retrieve all Biodata from the database.
// @desc get all biodata
// @Route Get /api/biodata
// @acces private
const getAllBiodata = asyncHandler(async(req, res) => {  
    Biodata.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Biodata."
        });
      });
});

// Find a single Biodata with an id
// @desc get single biodata
// @Route Get /api/biodata/getOne
// @acces private
const getOneBiodata = asyncHandler( async(req, res) => {
    const id = req.params.id;

    Biodata.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Biodata with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Biodata with id=" + id
      });
    });

});

// Update a Biodata by the id in the request
// @desc update single biodata
// @Route Patch /api/biodata
// @acces private
const updateBiodata = asyncHandler( async(req, res) => {
  const {id, nama , tempat_lahir,tanggal_lahir, Alamat} = req.body
  if(!id || !nama  || !tempat_lahir || !tanggal_lahir || !Alamat){
    return res.status(400).json({message: `all field required`})
  }
  const biodata = await Biodata.findByPk(id)

  console.log(biodata)
  if(!biodata){
    return res.status(400).json({message: `biodata not found!`})
  }

  biodata.nama = nama
  biodata.tanggal_lahir = tanggal_lahir
  biodata.tempat_lahir = tempat_lahir
  biodata.Alamat = Alamat

  const updatedBiodata = await biodata.save()
  res.send({message: ` biodata with id ${id} succesfully edited`})
  req.send(updatedBiodata)
});

// @desc update single biodata
// @Route delete /api/biodata
// @acces private
const deleteBiodata = asyncHandler( async(req, res) => {
    const id = req.params.id;

    Tutorial.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
});

module.exports = {
    createNewBiodata,
    getAllBiodata,
    getOneBiodata,
    updateBiodata,
    deleteBiodata
}
