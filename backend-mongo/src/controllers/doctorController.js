const {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor
} = require('../services/doctorService');

async function create(req, res) {
  const { name, email, password, crm, specialty } = req.body;
  if (!name || !email || !password || !crm || !specialty) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }
  try {
    const doctor = await createDoctor({ 
      name, email, password, crm, specialty, owner: req.userId 
    });
    // não retornar a senha
    const { password: _, ...data } = doctor.toObject();
    res.status(201).json(data);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: 'E-mail já cadastrado para outro médico.' });
    }
    res.status(500).json({ error: err.message });
  }
}

async function list(req, res) {
  const docs = await getDoctors(req.userId);
  res.json(docs);
}

async function getById(req, res) {
  const doc = await getDoctorById(req.params.id, req.userId);
  if (!doc) return res.status(404).json({ error: 'Médico não encontrado.' });
  res.json(doc);
}

async function replace(req, res) {
  const updateFields = req.body;
  try {
    const updated = await updateDoctor(req.params.id, req.userId, updateFields);
    if (!updated) return res.status(404).json({ error: 'Médico não encontrado.' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function modify(req, res) {
  // same as replace but partial
  return replace(req, res);
}

async function remove(req, res) {
  const deleted = await deleteDoctor(req.params.id, req.userId);
  if (!deleted) return res.status(404).json({ error: 'Médico não encontrado.' });
  res.status(204).end();
}

module.exports = {
  create,
  list,
  getById,
  replace,
  modify,
  remove
};
