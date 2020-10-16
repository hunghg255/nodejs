const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log('Connect successfully !');
  } catch (error) {
    console.log('Connect failly !');
  }
}

module.exports = { connect };
