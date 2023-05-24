const express = require('express')
const router = express.Router()
const biodataController = require('../controllers/biodata.controller')

router.route('/')
    .get(biodataController.getAllBiodata)
    .post(biodataController.createNewBiodata)
    .patch(biodataController.updateBiodata)
    
router.route('/:id')
    .get(biodataController.getOneBiodata)
    .delete(biodataController.deleteBiodata)

module.exports = router
