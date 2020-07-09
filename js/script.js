// fetch('https://cat-fact.herokuapp.com/facts')
//   .then(response => response.json())
//   .then(data => console.log(data));

function addMoreFacts() {

  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat,dog&amount=12')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
   console.log(data)
   for (let i = 0; i < data.length; i++) {
       const element = data[i];
       console.log(element.text)
       $('.grid-container').prepend(
        `<div class="card align-items-center">
       <div class="card-body">
          <h5 class="card-title align-items-center">${element.type}</h5>
         <p class="card-text">${element.text}</p>
        </div>
      </div>`
       )
       
   }
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
}