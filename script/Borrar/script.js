const getMovies = async () => {
  const response = await fetch("http://localhost:5000/Movies");
  const resJson = await response.json();
  return resJson;
};

const drawMovies = (movies) => {
  const movie$$ = document.querySelector(".main-result");
  movie$$.innerHTML = "";
  for (const movie of movies) {
    let figure$$ = document.createElement("figure");
    figure$$.className = "main-figure";
    figure$$.innerHTML = `
          <h3>${movie.title}</h3>
          <img src=${movie.img} alt=${movie.name} class="main-figure-img"/>
      `;
    //const btn$$ = document.createElement("button");
    //btn$$.textContent = "BORRAR";
    //btn$$.addEventListener("click", () => figure$$.remove());

    //figure$$.appendChild(btn$$);
    movie$$.appendChild(figure$$);
  }
};

const drawForm = () => {
  //const form$$ = document.querySelector(".main-form");
  const form$$ = document.createElement("form");
  const mainForm$$ = document.querySelector(".main-form");
  form$$.setAttribute("id", "fmovie");
  form$$.innerHTML = `
        <label for="title">Titulo:</label>
        <input type="text" id="title" name="title" />
        <label for="country">Pais:</label>
        <input type="text" id="country" name="country" />
        <label for="img">Imgen:</label>
        <input type="text" id="img" name="img" />
        <input type="submit" value="Submit" />
  `;
  mainForm$$.appendChild(form$$);
};

/*   
      <form class="main-form">
      </form>
     <label for="title">Titulo:</label>
        <input type="text" id="title" name="title" />
        <label for="country">Pais:</label>
        <input type="text" id="country" name="country" />
        <label for="img">Imgen:</label>
        <input type="text" id="img" name="img" />
        <input type="submit" value="Submit" />
*/

const init = async () => {
  drawForm();
  const movies = await getMovies();
  //console.log(movies)
  drawMovies(movies);
};

init();
