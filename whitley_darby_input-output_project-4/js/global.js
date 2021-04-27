var infoContainer = document.getElementById("about");
console.log(infoContainer);

var backButton = document.getElementById("home");
console.log(backButton);

var newEntry = document.getElementById("add-button");
console.log(newEntry);

// about.addEventListener("click", () => {
//       document.getElementById("container").style.display = "block";
//       document.getElementById("container").scrollTop = 0;
//
// });
//
// home.addEventListener("click", () => {
//     document.getElementById("container").style.display = "none";
//     document.getElementById("container").scrollTop = 0;
// });

newEntry.addEventListener("click", () => {
  const entry = createDiaryEntry({
    color: document.documentElement.dataset.diaryColor
  });
  document.querySelector('.grid2').appendChild(entry);
  entry.querySelector('.textarea').focus();
});

function createDiaryEntry({ color = 'pink' } = {}) {
  const container = document.createElement('div');
  container.className = `text-entry text-entry-${color}`;
  const title = document.createElement('p');
  title.className = 'diary-title';
  title.textContent = 'Dear Covid Diaries,';
  const textarea = document.createElement('textarea');
  textarea.className = 'textarea';
  textarea.setAttribute('contenteditable', '');
  const submitButton = document.createElement('button');
  submitButton.className = 'submit-button';
  submitButton.textContent = 'Submit';

  submitButton.addEventListener('click', () => {
    alert('Submitted');
  });

  container.append(title, textarea, submitButton);

  return container;
}