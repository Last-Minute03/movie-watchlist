const appTitle = document.getElementById("app-title")
const movieCount = document.getElementById("movie-count")
const movieForm = document.getElementById("movie-form")
const titleInput = document.getElementById("title-input")
const genreInput = document.getElementById("genre-input")
const movieList = document.getElementById("movie-list")
const clearWatchedbtn = document.getElementById("clear-watched-btn")
// select #movie-form        → store in movieForm
// select #title-input       → store in titleInput
// select #genre-input       → store in genreInput
// select #movie-list        → store in movieList
// select #clear-watched-btn → store in clearWatchedBtn

// select ALL elements with class "filter-btn" using querySelectorAll
// store them in filterBtns — you'll loop over them in Phase 6

const filterBtns = document.querySelectorAll("filter-btn");

//Part A
// Change the app title
appTitle.textContent = "My Movie Watchlist"

// Read and log the current count text
console.log("Count says:", movieCount.textContent)

// Update the count text manually (JavaScript will keep this accurate later)
movieCount.textContent = "0 movies"
//Part B
// .add() puts a class on the element
movieCount.classList.add("active-filter")
// Look at the browser — what changed?

// // .remove() takes it off
movieCount.classList.remove("active-filter")

// // .toggle() adds if missing, removes if present — one call does both
movieCount.classList.toggle("active-filter")
movieCount.classList.toggle("active-filter")

// What is the difference between getAttribute("value") and .value on an input?
// getAttribute("value") → reads from the HTML code that is hardcoded, if it exists if not then its just NULL
// .value   reads from THE USERS input

// >>>>>>>>>>>>>>>>>>>>>>>>>>
// Phase 3
// >>>>>>>>>>>>>>>>>>>>>>>>>>

movieForm.addEventListener("submit", (event)=> {

     // 1. Stop the browser from reloading the page
  //    Without this line, the page refreshes on every submit and you lose everything
  event.preventDefault()

  // 2. Read the movie title from the input — use .value, not getAttribute
  const title = titleInput.value

  // 3. Read the genre the same way
  const genre = genreInput.value

  // 4. Log both values to the console
  //    Type a title and genre, submit — confirm you see them in DevTools

  // 5. At the end, reset the form so the inputs are blank for the next entry
  movieForm.reset()
  //    .reset() clears all inputs in the form at once — no need to blank them one by one

  // 6. Don't build cards yet — that's Phase 4

}
);