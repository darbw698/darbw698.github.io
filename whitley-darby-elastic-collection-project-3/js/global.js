var click = false;

console.log("Hello, Airtable");


var Airtable = require('airtable');
console.log(Airtable);
var base = new Airtable({ apiKey: 'keyQh94iubcuyd4vc' }).base('appBPf8QrwRw3csSE');

base("truths").select({}).eachPage(gotPageOfTruths, gotAllTruths);

var truths = [];


function gotPageOfTruths(records, fetchNextPage) {
  console.log("gotPageOfTruths()");
  truths.push(...records);
  console.log(truths);
  fetchNextPage();

}


function gotAllTruths(err) {
  console.log("gotAllTruths()");
  titleButton.addEventListener("click", () => {
    click = true;
    var randomTruth = truths[Math.floor(Math.random() * (truths.length - 1))];
    titleShow.textContent = randomTruth.fields.title;
    updateInformation(randomTruth.fields);
  });

  var randomIndex = Math.random() * (truths.length - 1);
  console.log(randomIndex);


  if (err) {
    console.log("error loading books");
    console.error(err);
    return;
  }


}



var button = document.getElementById("titleButton");
console.log(button);

var titleShow = document.getElementById("titles");
console.log(titleShow);

titles.addEventListener("click", () => {
  if (click === true) {
    document.getElementById("container").style.display = "block"
    document.getElementById("container").scrollTop = 0
  }

});

document.getElementById("back-home").addEventListener("click", () => {
  document.getElementById("container").style.display = ""
});

var list = document.getElementById("clickable-list");
console.log(list);

var listItems = document.getElementsByClassName("list-source");
console.log(listItems);



document.getElementById("back-home-2").addEventListener("click", () => {
  document.getElementById("list-container").style.display = "none"
});

list.addEventListener("click", () => {
  document.getElementById("list-container").style.display = "block"
  document.getElementById("list-container").scrollTop = 0
  console.log("clicked")
  for (i = 0; i < listItems.length; i++) {
    console.log(truths[i].fields.title);
    listItems[i].innerText = truths[i].fields.title;
    listItems[i].dataset.number = i
    listItems[i].addEventListener("click", () => {
      click = true;
      var element = event.currentTarget;
      console.log(element);
      var pickedTitle = truths[element.dataset.number];
      console.log(pickedTitle);
      document.getElementById("container").style.display = "block"
      document.getElementById("container").scrollTop = 0
      listItems.textContent = pickedTitle.fields.title;
      updateInformation(pickedTitle.fields);
    });
  }


});



function updateInformation(fields) {
  document.getElementById("sourceTitle").textContent = fields.title;
  document.getElementById("sourceAuthor").textContent = `Author(s): ${fields.author}`;
  document.getElementById("sourceDate").textContent = `Published Date: ${fields["year published"]}`;
  document.getElementById("body-copy").textContent = fields.introduction;
}


var setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  // color.innerHTML = "#" + randomColor;
}

titleButton.addEventListener("click", setBg);
setBg();

