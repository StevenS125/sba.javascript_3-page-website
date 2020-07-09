// fetch('https://cat-fact.herokuapp.com/facts')
//   .then(response => response.json())
//   .then(data => console.log(data));

  fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=10')
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
       
   }
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });