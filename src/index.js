const init = () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event){
    event.preventDefault();
    const input = document.querySelector("input#searchByID");

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
      const title = document.querySelector("section#movieDetails h4")
      const summary = document.querySelector("section#movieDetails p")

      title.innerHTML = data.title
      summary.innerHTML = data.summary

      form.reset()
    })
    .catch((error) => {

      const errorCought = document.querySelector("section#movieDetails h4")
      errorCought.innerHTML = "Movie unavailable"
      console.error(errorCought, error)
    });
  })
}

document.addEventListener('DOMContentLoaded', init);