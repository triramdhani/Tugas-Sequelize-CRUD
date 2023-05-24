const express = require('express')
const router = express.Router()
const biodataController = require('../controllers/biodata.controller')

router.route('/')
    .get(biodataController.getAllBiodata)
    .post(biodataController.createNewBiodata)
    .patch(biodataController.updateBiodata)
    .delete(biodataController.deleteBiodata)
router.route('/:id')
    .get(biodataController.getOneBiodata)

module.exports = router
