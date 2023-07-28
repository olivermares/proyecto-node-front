function insertMovie() {
  document
    .getElementById("fmovie")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = new FormData(event.target);

      const newMovie = {
        title: formData.get("title"),
        country: formData.get("country"),
        img: formData.get("img"),
        id_director:formData.get("director") 
      };

      fetch("http://localhost:5000/Movies", {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        })
        .catch((error) => console.error("Error:", error));
    });
}
