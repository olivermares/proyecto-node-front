/*
const form$$ = document.querySelector(".main-form")
form$$.addEventListener("submit",() => {
    const newMovie= {
        title:document.getElementById("title").value,
        country:document.getElementById("country").value,
        img:document.getElementById("img").value
    }
    console.log(newMovie);
})
*/

document.getElementById("fmovie").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el envío del formulario por defecto
  const formData = new FormData(event.target); // Obtener los datos del formulario
  // formData es un objeto que contiene pares clave-valor de los campos del formulario

  // Ejemplo de cómo acceder a los datos del formulario
  const newMovie = {
    title: formData.get("title"),
    country: formData.get("country"),
    img: formData.get("img"),
  };
  //const name = formData.get("title");
  //const password = formData.get("country");

  // Hacer lo que necesites con los datos antes de enviarlos

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

  // Por ejemplo, puedes mostrarlos en la consola:

  // Ahora puedes enviar los datos del formulario utilizando fetch() u otra técnica.
});

/*
  var form=document.getElementById('form')

form.addEventListener('submit', function(e){
 e.preventDefault()

 var name=document.getElementById('name').value
 var body=document.getElementById('body').value

 fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title:name,
    body:body,

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  })
  .then(function(response){ 
  return response.json()})
  .then(function(data)
  {console.log(data)
  title=document.getElementById("title")
  body=document.getElementById("bd")
  title.innerHTML = data.title
  body.innerHTML = data.body  
}).catch(error => console.error('Error:', error)); 
});
*/
