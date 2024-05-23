
import { useState } from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Form from './Components/Form/Form';
import InputField from './Components/InputField/InputField';
import CarClass from './Components/CarClass/CarClass';

function App() {
  const classesCarros = [
    {
      carClass: 'Japanese Domestic Market',
      image: '/images/JDMcar.jpg',
    },
    {
      carClass: 'Coupé',
      image: '/images/CoupeCar.jpg',
    },
    {
      carClass: 'Esportivo',
      image: '/images/EsportivoCar.jpg',
    },
    {
      carClass: 'Elétrico',
      image: '/images/EletricoCar.jpeg',
    },
    {
      carClass: 'Supercarro',
      image: '/images/SuperCar.jpg',
    },
    {
      carClass: 'Hipercarro',
      image: '/images/HiperCar.jpg',
    },
  ];

  const [cars, setCars] = useState([]);

  const addCar = (car) => {
    setCars([...cars, car])
    console.log(car);
  }

  const handleCar = (car) => {
    addCar(car);
  }

  return (
    <div className="App">
      <Banner/>
      <Form onSubmit={handleCar} classesCarros={classesCarros}/>
      {classesCarros.map(carClass => <CarClass 
        key={carClass.carClass} 
        carClassName={carClass.carClass} 
        carClassImage={carClass.image} cars={cars.filter(car => car.classe === carClass.carClass)}/>
      )}
    </div>
  );
}

export default App;
