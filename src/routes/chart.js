import express from 'express';
import Data from '../model/model.js';

const barchartRoute = express.Router();

barchartRoute.get('/', async (req, res) => {
  try {
    const result = await Data.find();
    let i = 0;
    const map = new Map();
    while (i < result.length) {
      const entries = result[i].repositories;
      entries.forEach((data) => {
        let entry = map.get(data.language);
        if (entry) {
          entry += 1;
          map.set(data.language, entry);
        } else {
          map.set(data.language, 1);
        }
        i++;
      });
    }
    const newObj = Object.fromEntries(map);
    res.status(200).send(newObj);
  } catch (err) {
    console.log(err, 'Error occurred in /bar api');
  }
});

export default barchartRoute;
