// Quiz Submit
document.getElementById('quiz-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const selected = [...document.querySelectorAll('input[name="option"]:checked')]
    .map(input => input.value);
  const result = document.getElementById('quiz-result');

  if (selected.length !== 1) {
    result.innerText = 'Please select one answer.';
    result.style.color = 'orange';
  } else if (selected[0] === 'JavaScript') {
    result.innerText = '✔ Correct!';
    result.style.color = 'green';
  } else {
    result.innerText = '❌ Incorrect! Try again.';
    result.style.color = 'red';
  }
});

// Joke Generator (Updated API for better reliability)
async function getJoke() {
  const jokeDiv = document.getElementById('joke');
  jokeDiv.innerText = 'Loading...';
  try {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
    const data = await res.json();
    if (data.joke) {
      jokeDiv.innerText = data.joke;
    } else {
      jokeDiv.innerText = 'No joke found.';
    }
  } catch (err) {
    jokeDiv.innerText = 'Failed to fetch a joke!';
  }
}