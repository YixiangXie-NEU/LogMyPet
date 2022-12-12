import { MongoClient, ObjectId } from "mongodb";
import config from "../config.js";
import { faker } from "@faker-js/faker";
const mongoURL = config.MONGO_URL || "mongodb://localhost:27017";
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

const getOneRecord = async (req, res) => {
  let client;
  console.log(req.params.id);

  try {
    client = new MongoClient(mongoURL);
    const recordCol = client.db(DB_NAME).collection(RECORD_COLLECTION_NAME);
    const result = await recordCol
      .find({ _id: ObjectId(req.params.id) })
      .toArray();
    console.log(`Record ${req.params.id} is retrieved.`);
    res.json(result);
  } catch (err) {
    console.log(
      `Error occurred while getting pet ${req.params.id}: ${err.message}`
    );
    res.json({ status: 500 });
  }
};

const editRecord = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const recordCol = client.db(DB_NAME).collection(RECORD_COLLECTION_NAME);
    await recordCol.updateOne(
      { _id: ObjectId(req.params.id) },
      {
        $set: {
          about: req.body.content,
        },
      }
    );
    console.log(`Record ${req.params.id} is updated.`);
    res.json({ status: 200 });
  } catch (err) {
    console.log(
      `Error occurred while getting record ${req.params.id}: ${err.message}`
    );
    res.json({ status: 500 });
  } finally {
    console.log("editRecord: Closing db connection");
    client.close();
  }
};

const deleteRecord = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const recordCol = client.db(DB_NAME).collection(RECORD_COLLECTION_NAME);
    await recordCol.deleteOne({ _id: ObjectId(req.params.id) });
    console.log(`Record ${req.params.id} is deleted.`);
    res.json({ status: 200 });
  } catch (err) {
    console.log(
      `Error occurred while deleting record ${req.params.id}: ${err.message}`
    );
    res.json({ status: 500 });
  } finally {
    console.log("deleteRecord: Closing db connection");
    client.close();
  }
};

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const seedDB = async (res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const collection = client.db(DB_NAME).collection(RECORD_COLLECTION_NAME);

    // make a bunch of time series data
    const records = [];
    const categoryIds = [
      "638409972cee931320d80a80",
      "63840a0d2cee931320d80a81",
      "63840a712cee931320d80a82",
      "63840ad02cee931320d80a83",
    ];
    const names = ["Eating", "Drinking", "Poop", "Pee"];
    const imgUrls = [
      "https://assets.moveshanghai.com/lmp_09.png",
      "https://assets.moveshanghai.com/lmp_06.png",
      "https://assets.moveshanghai.com/lmp_08.png",
      "https://assets.moveshanghai.com/lmp_07.png",
    ];
    const pets = [
      {
        id: "637d169d5d92a22e072de62b",
        name: "Caral",
        gender: "Male",
        weight: "4 kg",
        neuteredOrSpayed: true,
      },
      {
        id: "637d114a09071db97148a2b6",
        name: "Bambi",
        gender: "Male",
        weight: "10 kg",
        neuteredOrSpayed: false,
      },
    ];

    for (let i = 0; i < 1200; i++) {
      const rdInt = randomIntFromInterval(0, 3);
      const randomPetInt = randomIntFromInterval(0, 1);
      console.log(categoryIds[rdInt]);
      console.log(pets[randomPetInt].id);
      const record = {
        timestamp_day: faker.date.past(),
        category: {
          id: categoryIds[rdInt],
          name: names[rdInt],
          imgUrl: imgUrls[rdInt],
        },
        pet: pets[randomPetInt],
        about: faker.lorem.paragraph(),
      };

      records.push(record);
    }
    collection.insertMany(records);

    console.log("Database seeded! :)");
    client.close();
    res.json({ status: 200 });
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
  getOneRecord,
  getRecords,
  editRecord,
  deleteRecord,
  getCategories,
  authenticate,
  seedDB,
};
