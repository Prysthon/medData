const Doctor = require('../models/Doctor');

async function createDoctor({ name, email, password, crm, specialty, owner }) {
  const doctor = new Doctor({ name, email, password, crm, specialty, owner });
  await doctor.save();
  return doctor;
}

async function getDoctors(owner) {
  // Caso queira mostrar somente o do admin logado:
  // return Doctor.find({ owner });
  return Doctor.find();
}

async function getDoctorById(id, owner) {
  // return Doctor.findOne({ _id: id, owner });
  return Doctor.findOne({ _id: id });
}

async function updateDoctor(id, owner, updateFields) {
  return Doctor.findOneAndUpdate(
    { _id: id },
    updateFields,
    { new: true, runValidators: true }
  );
}

async function deleteDoctor(id, owner) {
  return Doctor.findOneAndDelete({ _id: id });
}

module.exports = {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor
};
