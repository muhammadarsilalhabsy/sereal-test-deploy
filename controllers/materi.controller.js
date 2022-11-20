const Materi = require('../models/materi');

module.exports = {
  getAllMateri: async (req, res) => {
    try {
      const materi = await Materi.find({}, '-__v');

      res.status(200).json({
        message: 'Success get all materi',
        data: materi,
      });
    } catch (error) {
      res.status(500).send({
        message: 'Server Error',
        error: error.message,
      });
    }
  },

  getMateriByID: async (req, res) => {
    const { id } = req.params;

    try {
      if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'No data for this materi' });
      const materi = await Materi.findOne({ _id: id });
      res.status(200).json({
        message: `Get materi with id ${id} success`,
        data: materi,
      });
    } catch (error) {
      res.status(500).send({
        message: 'Server Error',
        error: error.message,
      });
    }
  },

  addMateri: (req, res) => {
    const data = req.body;

    const materi = new Materi(data);
    materi.save(function (err) {
      if (err) {
        res.status(500).json({
          massage: err,
        });
      } else {
        res.status(201).json({
          message: 'Materi has been created',
        });
      }
    });
  },

  updateMateriByID: async (req, res) => {
    const { id } = req.params;
    const { title, description, content, categories, status } = req.body;
    try {
      const materi = await Materi.findOne({ _id: id });

      if (title) materi.title = title;

      if (description) materi.description = description;

      if (content) {
        if (content.image) materi.content.image = content.image;

        if (content.video) materi.content.video = content.video;
      }

      for (let key in categories) {
        if (categories[key]) materi.categories[key] = categories[key];
      }

      if (status != undefined && typeof status == 'boolean') status ? (materi.status = true) : (materi.status = false);

      await materi.save();

      res.json({
        message: 'Success update materi',
        data: materi,
      });
    } catch (error) {
      res.status(500).send({
        message: 'Server Error',
        error: error.message,
      });
    }
  },

  deleteMateriByID: async (req, res) => {
    const { id } = req.params;
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: 'No data for this materi' });
      }
      await Materi.deleteOne({ _id: id });
      res.status(200).send({ massage: 'Success delete materi' });
    } catch (error) {
      res.status(404);
      res.send({ error: "Materi doesn't exist!", message: error.message });
    }
  },
};
