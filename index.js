import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
const app = express();
const PORT = process.env.PORT;
console.log(process.env.MONGO_URL);

const MONGO_URL = process.env.MONGO_URL;
export const client = new MongoClient(MONGO_URL);
await client.connect(); // call
console.log("Mongo is connected !!!  ");

app.use(cors()); //3rd party middleware
app.use(express.json()); //inbuit middleware

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

const user = [
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc1",
    company: "xyz1",
    question: "what is react",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc2",
    company: "xyz2",
    question: "what is react uses",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc3",
    company: "xyz3",
    question: "what is react benfits",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc4",
    company: "xyz4",
    question: "what is react features",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc5",
    company: "xyz5",
    question: "what is react components",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc6",
    company: "xyz6",
    question: "what is react context",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc7",
    company: "xyz7",
    question: "what is react useState",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc8",
    company: "xyz8",
    question: "what is react props",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc9",
    company: "xyz9",
    question: "what is react conditional rendering",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc10",
    company: "xyz10",
    question: "what is react useReducer",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc11",
    company: "xyz11",
    question: "what is react useMemo",
  },
  {
    img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=996&t=st=1678856572~exp=1678857172~hmac=9dc593e05439b3012f9d8108e8265ac3e846773ba5b68fd1eef9e043d8224e6d",
    name: "Abc12",
    company: "xyz12",
    question: "what is react virtual dom",
  },
];

app.post("/users", express.json(), async function (request, response) {
  const data = request.body;
  const result = await client
    .db("stackoverflowclone")
    .collection("user")
    .insertMany(data);
  response.send(result);
});

app.get("/users", async function (request, response) {
  const result = await client
    .db("stackoverflowclone")
    .collection("user")
    .find({})
    .toArray();
  response.send(result);
});
