import express from "express";
import { Client } from "../index.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/askquestions", auth, async (request, respond) => {
  const data = request.body;
  const result = await Client.db("stackoverflowclone")
    .collection("questions")
    .insertOne(data);
  respond.status(200).send(result);
});

router.get("/askquestions", async (request, respond) => {
  const result = await Client.db("stackoverflowclone")
    .collection("questions")
    .find()
    .toArray({});
  respond.status(200).send(result);
});

export default router;
