
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  
rl.question('What\'s your name? Nicknames are also acceptable :)', (name) => {
  //console.log(`Thank you for your valuable feedback: ${answer}`);
  
  rl.question('What\'s an activity you like doing? ', (activity) => {
      //console.log(`Thank you for your valuable feedback: ${answer}`);
  

    rl.question('What do you listen to while doing that? ', (listen) => {
      //console.log(`Thank you for your valuable feedback: ${answer}`);
  
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
      //    console.log(`Thank you for your valuable feedback: ${answer}`);
  
      rl.question('What\'s your favourite thing to eat for that meal?', (favFood) => {
      //console.log(`Thank you for your valuable feedback: ${answer}`);
  
        rl.question('Which sport is your absolute favourite?', (sport) => {
      //console.log(`Thank you for your valuable feedback: ${answer}`);
  
           rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superPower) => {
              //console.log(`Thank you for your valuable feedback: ${answer}`);
          console.log(`Thank you ${name} for your valuable Time.Here is the Profile:` );
          console.log(`${name} like to do ${activity} when he was listening ${listen}.He realy like to eat his ${meal} meal, Whereas hi smost favorite food is ${favFood}.He also like to play.His favorite sport is ${sport}.${superPower} `);
  

  rl.close();
            });
          });
        });
      });
    });
  });
});

// 
// 
// 
// 
// 
// 
// 


