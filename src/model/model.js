import mongoose from 'mongoose';

var schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  repositories: [
    {
      id: { type: String },
      name: { type: String, required: true },
      language: { type: String },
      html_url: { type: String },
      stargazers_count: { type: Number },
      forks: { type: Number },
    },
  ],
});

const Data = mongoose.model('Data', schema);

export default Data;
