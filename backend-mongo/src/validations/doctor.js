// validations/doctor.js
const { Joi, Segments } = require('celebrate');

const putDoctorSchema = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    crm: Joi.string().required(),
    specialty: Joi.string().required()
  })
};

module.exports = {
  putDoctorSchema
};
