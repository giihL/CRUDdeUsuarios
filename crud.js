let cars = JSON.parse(localStorage.getItem('cars')) || [];
const carForm = document.getElementById('carForm');
carForm.addEventListener('submit', saveCar);

function saveCar (event){
   
    const carId = document.getElementById('carId').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const ano = document.getElementById('ano').value;

    

const carData = {
    marca,
    modelo,
    ano
};

if (carId){
    cars[carId] = carData;
} else {
    cars.push(carData);
}

localStorage.setItem('cars', JSON.stringify(cars));

carForm.reset();
document.getElementById('carId').value = '',
renderCarTable();
}

function renderCarTable(){
    carTableBody.innerHTML = '';
    cars.forEach((cars, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${cars.marca}</td>
        <td>${cars.modelo}</td>
        <td>${cars.ano}</td>
        <td class="actions">
       <button class="edit" onclick="editCar(${index})">Editar</button>
       <button class="delete" onclick="deleteCar(${index})">Deletar</button>
        <td>
     `;
     carTableBody.appendChild(row);
    });
}

function editCar(index){
    const car = cars[index];
    document.getElementById ('carId').value = index;
    document.getElementById ('marca').value = car.marca;
    document.getElementById ('modelo').value = car.modelo;
    document.getElementById ('ano').value = car.ano;
}

function deleteCar(index) {
    cars.splice(index, 1);
    localStorage.setItem('cars', JSON.stringify(cars));
    renderCarTable();
  }
  
  
  window.onload = renderCarTable;