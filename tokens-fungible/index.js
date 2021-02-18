const sudo = require('sudo-js');
sudo.setPassword('Qwerty550');

// let command = ['/home/yaroslav/TONbin/tonos-cli genphrase'];
// sudo.exec(command, function(err, pid, result) {
//     console.log(result);
// });

sudo.check(function(valid) {
    console.log('password valid : ', valid);
});

async function getResult() {
  let command = ['/home/yaroslav/TONbin/tonos-cli genphrase'];

  return new Promise(function(resolve, reject) {
    sudo.exec(command, function(err, pid, result) {
      if (err) {
        return reject(err);
      }
      ;
      return resolve(result);

    })
  })
};

console.log(getResult());

async function main() {
let result = await getResult();
console.log(result);
  }

(async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.error(error);
    }
  })();
