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

// >>>>>>>>>>>>>>>>
//Phase 4
// >>>>>>>>>>>>>>>>

function createMovieCard(title, genre) {
  // 1. Create the outer <li>
  //    - give it the class "movie-card"
  //    - use setAttribute to set data-genre to the genre value

    const outLi = document.createElement("li");
    outLi.classList.add("movie-card");
    outLi.setAttribute("data-genre", genre);

  // 2. Create a <div> for the info section — class "movie-info"
  //    Inside it, create two <span> elements:
  //    - one with class "movie-title" — set its textContent to title
  //    - one with class "movie-genre" — set its textContent to genre (show "No genre" if empty)
  //    Append both spans into the info div

    const movInfDv = document.createElement("div");
    movInfDv.classList.add("movie-info");

        const spa1 = document.createElement("span");
            spa1.classList.add("movie-title");
            spa1.textContent = title
        const spa2 = document.createElement("span");
            spa2.classList.add("movie-genre");
            if(genre === ''){
                spa2.textContent = "No genre";
            }
            else[
                spa2.textContent = genre
            ]
    movInfDv.appendChild(spa1);
    movInfDv.appendChild(spa2);

  // 3. Create a <div> for the buttons — class "movie-actions"
  //    Inside it, create two <button> elements:
  //    - one with class "watch-btn" — textContent "Mark Watched"
  //    - one with class "remove-btn" — textContent "Remove"
  //    Append both buttons into the actions div

        const movAct = document.createElement("div");
            const but1 = document.createElement("button");
                but1.classList.add("watch-btn");
                but1.textContent = "Mark Watched";
            const but2 = document.createElement("button");
                but2.classList.add("remove-btn");
                but2.textContent = "Remove";

        movAct.appendChild(but1);
        movAct.appendChild(but2);

  // 4. Append the info div and actions div into the <li>

        outLi.appendChild(movInfDv);
        outLi.appendChild(movAct);

  
  // 5. return the card — do NOT append it here
  //    The function's job is to build and return. Appending is the caller's job.


        return outLi;


}

// After reading the title and genre (and before form.reset()):

// 1. Call createMovieCard(title, genre) — store the result in a variable
// 2. Append the card to movieList
// 3. // TODO: call updateCount() here — you'll write that function in Phase 6
// 4. Call movieForm.reset()

const mov1 = createMovieCard("bruh2", "bruhgenre");
movieList.appendChild(mov1);
updateCount();
movieForm.reset();