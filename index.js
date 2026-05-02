// https://official-joke-api.appspot.com/random_joke 


const id = document.getElementById("id");
const joke = document.getElementById("joke"); 
const button = document.getElementById("btn");

async function getJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();

    id.textContent = `joke # ${data.id}`;
    joke.textContent = `${data.setup} 😂 ${data.punchline}`;
  } catch (error) {
    joke.textContent = "Something went wrong fetching jokes!";
  }
}

// load first joke on page load
getJoke();

// button click = new joke
button.addEventListener("click", getJoke);