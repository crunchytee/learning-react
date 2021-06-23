var animal, location, breed;

fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
  .then(response => response.json())
  .then(data => console.log(data));
console.log(animal, location, breed);
