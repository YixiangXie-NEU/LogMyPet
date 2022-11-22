import { MongoClient } from "mongodb";
import config from "../config.js";
import passport from "passport";
import LocalStrategy from "passport-local";

const mongoURL = config.MONGO_URL || "mongodb://localhost:27017";
const DB_NAME = "logMyPetDB";
const USER_DB_NAME = "users";
const PET_COLLECTION_NAME = "pets";
const USER_COLLECTION_NAME = "usersLists";
const PAGE_SIZE = 20;

const strategy = new LocalStrategy(async function verify(
  username,
  password,
  cb
) {
  let client = new MongoClient(mongoURL);

  const result = await client
    .db(USER_DB_NAME)
    .collection(USER_COLLECTION_NAME)
    .find({ username: username })
    .toArray();

  const user = result[0];
  user.id = result[0]._id.toString();

  if (password == result[0].password) {
    return cb(null, user);
  } else {
    return cb(null, false);
  }
});

passport.use(strategy);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

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
    console.log(`Page ${page} of pets are retrieved. Example record[0]: ${result[0]}`);
    res.json(result);
  } catch (err) {
    console.log(`Error occurred while getting pets: ${err.message}`);
    res.sendStatus(500);
  } finally {
    console.log("getPets: Closing db connection");
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
    res.sendStatus(500);
  } finally {
    console.log("createPet: Closing db connection");
    client.close();
  }
};

const userAuthStatus = async (req, res) => {
  if (req.isAuthenticated()) {
    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
};

const authenticate = async (req, res) => {
  passport.authenticate("local", (err, user) => {
    if (err) throw err;
    if (!user) {
      res.sendStatus(403);
    } else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.sendStatus(200);
      });
    }
  })(req, res);
};

const createUser = async (req, res) => {
  let client;

  try {
    client = new MongoClient(mongoURL);

    const result = await client
      .db(USER_DB_NAME)
      .collection(USER_COLLECTION_NAME)
      .find({ username: req.body.username })
      .toArray();

    if (result.length > 0) res.sendStatus(403);
    else {
      await client
        .db(USER_DB_NAME)
        .collection(USER_COLLECTION_NAME)
        .insertOne(req.body);
      console.log(`A new user was inserted with the _id: ${res.json(result)}`);
    }
  } catch (e) {
    console.log(e.message || "err ocurred while creating user");
    res.sendStatus(500);
  }
};

export default {
  getPets,
  createPet,
  userAuthStatus,
  createUser,
  authenticate,
};
