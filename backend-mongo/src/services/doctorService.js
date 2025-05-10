const Doctor = require('../models/Doctor');

async function createDoctor({ name, email, password, crm, specialty, owner }) {
  const doctor = new Doctor({ name, email, password, crm, specialty, owner });
  await doctor.save();
  return doctor;
}

async function getDoctors(owner) {
  return Doctor.find({ owner });
}

async function getDoctorById(id, owner) {
  return Doctor.findOne({ _id: id, owner });
}

async function updateDoctor(id, owner, updateFields) {
  return Doctor.findOneAndUpdate(
    { _id: id, owner },
    updateFields,
    { new: true, runValidators: true }
  );
}

async function deleteDoctor(id, owner) {
  return Doctor.findOneAndDelete({ _id: id, owner });
}

module.exports = {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor
};
