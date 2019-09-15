import Events from "../model/Events";

class EventsController {
  static async getAll(req, res) {
    try {
      const events = await Events.find();

      return res.status(200).json(events);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async save(req, res) {
    try {
      const events = await Events.create(req.body);

      return res.status(201).json(events);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default EventsController;
