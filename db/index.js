import { MongoClient, ObjectId } from "mongodb";
import config from "../config.js";
import { faker } from "@faker-js/faker";
// const mongoURL = config.MONGO_URL || "mongodb://localhost:27017";
const mongoURL =
  config.MONGO_URL ||
  "mongodb+srv://dylantse:IHcuwrJ9F648zvYH@cluster0.vrljs4f.mongodb.net/?retryWrites=true&w=majority";
const DB_NAME = "logMyPetDB";
const PET_COLLECTION_NAME = "pets";
const USER_COLLECTION_NAME = "users";
const RECORD_COLLECTION_NAME = "records";
const CATEGORY_COLLECTION_NAME = "categories";
const PAGE_SIZE = 20;

const getPets = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const petsCol = client.db(DB_NAME).collection(PET_COLLECTION_NAME);
    const page = req.body.page || 0;
    const result = await petsCol
      .find({})
      .skip(PAGE_SIZE * page)
      .limit(PAGE_SIZE)
      .toArray();
    console.log(
      `Page ${page} of pets are retrieved. Example record[0]: ${result[0]}`
    );
    res.json(result);
  } catch (err) {
    console.log(`Error occurred while getting pets: ${err.message}`);
    res.status(500).json({ error: err.message });
  } finally {
    console.log("getPets: Closing db connection");
    client.close();
  }
};

const getOnePet = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const petsCol = client.db(DB_NAME).collection(PET_COLLECTION_NAME);
    const result = await petsCol
      .find({ _id: ObjectId(req.params.id) })
      .toArray();
    console.log(`Pet ${req.params.id} is retrieved.`);
    res.json(result);
  } catch (err) {
    console.log(
      `Error occurred while getting pet ${req.params.id}: ${err.message}`
    );
    res.status(500).json({ error: err.message });
  } finally {
    console.log("getOnePet: Closing db connection");
    client.close();
  }
};

const createPet = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const petsCol = client.db(DB_NAME).collection(PET_COLLECTION_NAME);
    const result = await petsCol.insertOne(req.body);
    console.log(`A new pet was inserted with the _id: ${result.insertedId}`);
    res.json(result);
  } catch (err) {
    console.log(`Error occurred while creating pet: ${err.message}`);
    res.status(500).json({ error: err.message });
  } finally {
    console.log("createPet: Closing db connection");
    client.close();
  }
};

const editPet = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const petsCol = client.db(DB_NAME).collection(PET_COLLECTION_NAME);
    const result = await petsCol.updateOne(
      { _id: ObjectId(req.params.id) },
      {
        $set: req.body,
      }
    );
    console.log(`Pet ${req.params.id} is updated.`);
    res.json(result);
  } catch (err) {
    console.log(
      `Error occurred while getting pet ${req.params.id}: ${err.message}`
    );
    res.status(500).json({ error: err.message });
  } finally {
    console.log("editPet: Closing db connection");
    client.close();
  }
};

const deletePet = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const petsCol = client.db(DB_NAME).collection(PET_COLLECTION_NAME);
    const result = await petsCol.deleteOne({ _id: ObjectId(req.params.id) });
    console.log(`Pet ${req.params.id} is deleted.`);
    res.json(result);
  } catch (err) {
    console.log(
      `Error occurred while deleting pet ${req.params.id}: ${err.message}`
    );
    res.status(500).json({ error: err.message });
  } finally {
    console.log("deletePet: Closing db connection");
    client.close();
  }
};

const userAuthStatus = async (req, res) => {
  res.json({
    isLoggedIn: !!req.session.user,
    user: req.session.user,
  });
};

const authenticate = async (req, res) => {
  const user = req.body;
  let client;
  try {
    client = new MongoClient(mongoURL);

    const result = await client
      .db(DB_NAME)
      .collection(USER_COLLECTION_NAME)
      .find({ username: user.username })
      .toArray();

    if (user.password == result[0].password) {
      // req.session.user = { user: user.username };
      res.json(result);
    }
  } catch (e) {
    console.log(e);
    // req.session.user = null;
    // res.json({
    //   isLoggedIn: false,
    //   err: "Incorrect username password combination",
    // });
  }
};

const createUser = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);

    const result = await client
      .db(DB_NAME)
      .collection(USER_COLLECTION_NAME)
      .find({ username: req.body.username })
      .toArray();

    if (result.length > 0) res.status(403).json({ error: "403" });
    else {
      await client
        .db(DB_NAME)
        .collection(USER_COLLECTION_NAME)
        .insertOne(req.body);
      console.log(`A new user was inserted with the _id: ${res.json(result)}`);
    }
  } catch (e) {
    console.log(e.message || "err ocurred while creating user");
    res.status(500).json({ error: e.message });
  }
};

const createRecord = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const result = await client
      .db(DB_NAME)
      .collection(RECORD_COLLECTION_NAME)
      .insertOne(req.body);
    console.log(`A new record was inserted with the _id: ${result.insertedId}`);
    res.json(result);
  } catch (err) {
    console.log(`Error occurred while creating record: ${err.message}`);
    res.status(500).json({ error: err.message });
  }
};

const getRecords = async (req, res) => {
  let client;
  // let page = req.query.page || 0;
  console.log(req.query);

  try {
    client = new MongoClient(mongoURL);
    const result = await client
      .db(DB_NAME)
      .collection(RECORD_COLLECTION_NAME)
      .find({})
      // .skip(PAGE_SIZE * page)
      // .limit(PAGE_SIZE)
      .toArray();
    // console.log(
    //   `Page ${page} of records are retrieved. Example record[0]: ${result[0]}`
    // );
    console.log(`Records are retrieved. Example record[0]: ${result[0]}`);
    res.json(result);
  } catch (err) {
    console.log(`Error occurred while getting record: ${err.message}`);
    res.json({ status: 500 });
  }
};

const getCategories = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const categoriesCol = client
      .db(DB_NAME)
      .collection(CATEGORY_COLLECTION_NAME);
    const result = await categoriesCol.find({}).toArray();
    console.log("Retrieved categories");
    res.json(result);
  } catch (err) {
    console.log(`Error occurred while getting categories: ${err.message}`);
    res.status(500).json({ error: err.message });
  }
};

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const seedDB = async () => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const collection = client.db(DB_NAME).collection(RECORD_COLLECTION_NAME);
    console.log("Connected correctly to server");

    // The drop() command destroys all data from a collection.
    // Make sure you run it against proper database and collection.
    // collection.drop();

    // make a bunch of time series data
    let records = [];
    let categoryIds = [
      "638409972cee931320d80a80",
      "63840a0d2cee931320d80a81",
      "63840a712cee931320d80a82",
      "63840ad02cee931320d80a83",
    ];
    let names = ["Eating", "Drinking", "Poop", "Pee"];
    let imgUrls = [
      "https://assets.moveshanghai.com/lmp_09.png",
      "https://assets.moveshanghai.com/lmp_06.png",
      "https://assets.moveshanghai.com/lmp_08.png",
      "https://assets.moveshanghai.com/lmp_07.png",
    ];

    for (let i = 0; i < 1200; i++) {
      const rdInt = randomIntFromInterval(0, 3);
      console.log(categoryIds[rdInt]);
      let record = {
        timestamp_day: faker.date.past(),
        category: {
          id: categoryIds[rdInt],
          name: names[rdInt],
          imgUrl: imgUrls[rdInt],
        },
        about: faker.lorem.paragraph(),
      };

      records.push(record);
    }
    collection.insertMany(records);

    console.log("Database seeded! :)");
    client.close();
  } catch (err) {
    console.log(err.stack);
  }
};

export default {
  getPets,
  getOnePet,
  createPet,
  editPet,
  deletePet,
  userAuthStatus,
  createUser,
  createRecord,
  getRecords,
  getCategories,
  authenticate,
  seedDB,
};
