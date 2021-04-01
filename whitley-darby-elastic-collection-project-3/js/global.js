console.log("Hello, Airtable");


var Airtable = require('airtable');
console.log(Airtable);
var base = new Airtable({apiKey: 'keyQh94iubcuyd4vc'}).base('appBPf8QrwRw3csSE');

base("truths").select({}).eachPage(gotPageOfTruths, gotAllTruths);

const truths = [];

function gotPageOfTruths(records, fetchNextPage) {
    console.log("gotPageOfTruths()");
    truths.push(...records);
    fetchNextPage();
  }
  
 
  function gotAllTruths(err) {
    console.log("gotAllTruths()");
  
   
    if (err) {
      console.log("error loading books");
      console.error(err);
      return;
    }

}