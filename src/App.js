import logo from './logo.svg';
import './App.css';
import ItemList from './components/itemList';

function App() {
 
 const itemArray=[
   {
     imgSrc:'/images/iphone11.jpg',
     name:'Iphone 11',
     price: '1 349,99 $',
   },
   {
    imgSrc:'/images/razerblade.jpg',
    name:'Razer Blade',
    price: '4 349,99 $',
  },
  {
    imgSrc:'/images/audi R8.jpg',
    name:'Audi R8',
    price: '7 349,99 $',
  },
]

 return (
    <div className="App">
     
     <ItemList itemArray={ itemArray } />

    </div>
  );
}

export default App;
