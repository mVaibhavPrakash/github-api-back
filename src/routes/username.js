import express from 'express';
import axios from 'axios';
import Parent from '../class/Parent.js';
import Child from '../class/Child.js';
import Data from '../model/model.js';

const usernameRoute = express.Router();

usernameRoute.post('/username', async (req, res) => {
  try {
    const username = req.body.username;
    const isDataAlreadyPresent = await Data.findOne({ username: username });
    if (isDataAlreadyPresent == null) {
      axios({
        method: 'GET',
        url: `https://api.github.com/users/${username}/repos`,
      })
        .then((respons) => {
          const parent = new Parent(username);
          const response = respons.data;
          let i = 0;
          while (i < response.length) {
            const lang =
              response[i].language == null
                ? 'No Language detected'
                : response[i].language;
            const child = new Child(
              response[i].id,
              response[i].name,
              lang,
              response[i].html_url,
              response[i].stargazers_count,
              response[i].forks
            );

            parent.repositories.push(child.getValue);
            i++;
          }
          const data = new Data(parent);
          data.save((err) => {
            if (err) console.log(`Error : ${err}`);
            else console.log('Data sent');
          });
          console.log('data sent from api');
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(500);
        });
    } else {
      console.log('data sent from db');
      res.send(isDataAlreadyPresent);
    }
  } catch (err) {
    res.status(500);
  }
});

export default usernameRoute;
