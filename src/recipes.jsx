import SpaghettiCarbonara from './images/SpaghettiCarbonara.png'
import MargheritaPizza from './images/MargheritaPizza.png'
import Tiramisu from './images/Tiramisu.png'





const recipes = [
  { 
    id: 1,
    title: "Greek salad",
    price: 12.99,
    image: "https://i.ibb.co/68c9bLv/greek-salad.jpg",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
  },
  {
    id: 2,
    title: "Bruchetta",
    price: 5.99,
    image: "https://i.ibb.co/317GqZv/Bruchetta.png",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: 4.78,
    image: "https://i.ibb.co/sm6MfcH/desert.jpg",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
  {
    id: 4,
    title: "Spaghetti Carbonara",
    price: 10.99,
    image: SpaghettiCarbonara ,
    description:
      "Classic Italian pasta with creamy egg sauce, crispy pancetta, and fresh parmesan cheese.",
  },
  {
    id: 5,
    title: "Margherita Pizza",
    price: 9.49,
    image: MargheritaPizza,
    description:
      "Stone-baked pizza topped with fresh mozzarella, basil leaves, and homemade tomato sauce.",
  },
  {
    id: 6,
    title: "Tiramisu",
    price: 6.25,
    image: Tiramisu,
    description:
      "Layered Italian dessert with espresso-soaked ladyfingers, mascarpone cream, and cocoa powder.",
  }
];

export default recipes;
