document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById("date");
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  
    const urlParams = new URLSearchParams(window.location.search);
    const genre = urlParams.get('genre');
  
    if (genre) {
      document.getElementById("selectedGenre").textContent = genre;
      updateMovies();
      hideGenreDropdown();
    }
  });

function hideGenreDropdown() {
    const genreSelect = document.getElementById("genre");
    genreSelect.style.display = "none";
}

document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form values
    const genre = document.getElementById("selectedGenre").textContent;
    const movie = document.getElementById("movie").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const seats = document.getElementById("seats").value;
  
    // Construct booking details message
    const bookingDetails = `
      Genre: ${genre}
      Movie: ${movie}
      Name: ${name}
      Email: ${email}
      Date: ${date}
      Time: ${time}
      Seats: ${seats}
    `;
  
    // Display success message with booking details
    alert("Success booking ticket!\n\n" + bookingDetails);
  });

function updateMovies() {
    const genre = document.getElementById("selectedGenre").textContent;
    const movieSelect = document.getElementById("movie");
  
    const movies = {
      action: [
        "Mission Impossible - Dead Reckoning",
        "Bullet Train",
        "The Suicide Squad"
      ],
      comedy: [
        "Dumb Money",
        "Everything Everywhere All at Once",
        "Free Guy"
      ],
      horror: [
        "Saw X",
        "Talk to Me",
        "The Conjuring: The Devil Made Me Do It"
      ]
    };
  
    // Clear existing options
    movieSelect.innerHTML = "";
  
    // Populate new options
    movies[genre].forEach(function(movie) {
      const option = document.createElement("option");
      option.value = movie;
      option.textContent = movie;
      movieSelect.appendChild(option);
    });
  }
