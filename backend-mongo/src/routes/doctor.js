const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authmiddleware');
const doctorController = require('../controllers/doctorController');

const { celebrate } = require('celebrate');
const { putDoctorSchema } = require('../validations/doctor');

// aplica JWT a todas as rotas de médico
router.use(authMiddleware);

router.post('/', doctorController.create);
router.get('/', doctorController.list);
router.get('/:id', doctorController.getById);
router.put('/:id',
  celebrate(putDoctorSchema),
  doctorController.replace
);
router.patch('/:id', doctorController.modify);
router.delete('/:id', doctorController.remove);

module.exports = router;
