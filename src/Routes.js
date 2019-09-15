import { Router } from "express";
import EventsControler from "./controllers/Events.controller";

const Routes = Router();

Routes.get("/", (req, res) => res.send("Futura Home da API!!!"));
Routes.get("/events", EventsControler.getAll);
Routes.post("/events", EventsControler.save);

export default Routes;
