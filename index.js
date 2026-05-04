const id = document.getElementById("id");
const joke = document.getElementById("joke");
const button = document.getElementById("btn");

async function getJoke() {
  joke.textContent = "Loading joke... 😂";

  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();

    id.textContent = `JOKE #${data.id}`;
    joke.textContent = data.setup + " 😂 " + data.punchline;

  } catch (error) {
    joke.textContent = "Something went wrong fetching jokes!";
  }
}

button.addEventListener("click", getJoke);

// load first joke
getJoke();