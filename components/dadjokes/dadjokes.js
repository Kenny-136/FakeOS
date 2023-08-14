const newJokeBtn = document.querySelector("#newJokeBtn")

const getJoke = async ()=> {
  const response = await fetch(`https://icanhazdadjoke.com`, 
  {headers: {Accept: 'application/json'}}
  )
  const jokeData = await response.json()
  document.getElementById('joke').innerHTML = jokeData.joke
}

newJokeBtn.addEventListener('click', () => getJoke())