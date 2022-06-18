import express from 'express';
import Data from '../model/model.js';

const allRoute = express.Router();

allRoute.get('/getall', async (req, res) => {
  try {
    console.log('all');
    const result = await Data.find();
    if (result != null) {
      res.status(200).send(result);
    } else {
      res.send(500);
    }
  } catch (err) {
    console.log(err);
  }
});

export default allRoute;
