/* eslint-disable no-console */
const { mongoConnection } = require('../src/config/mongoDbConfig');
const { User } = require('../src/models/index');

const insertSeedData = () => {
  mongoConnection().then((data) => {
    data.on('open', () => {
      const newUser = new User({
        name: 'Manish',
        email: 'manish@gmail.com',
        password: 'abc@12345',
      });

      newUser.save(function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      });
    });
  });
};

module.exports = { insertSeedData };
