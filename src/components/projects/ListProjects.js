import { 
  shortly,
  countries,
  mori,
  inwisnas
 } from '../../assets/img';

export const projects = [
  { 
    id: 1, 
    name: "Countries API", 
    description: "This app reference from front end mentor, This App consume API from https://restcountries, technologies i use in this app is React JS, SCSS, Fontawesome and Bootstrap",
    image: countries.default,
    link: "https://countries-three.vercel.app/",
    languages: [
      {
        id: 1,
        language: "ReactJS",
        color: "#18105C"
      }, 
      {
        id: 2,
        language: "SCSS",
        color: "#CD6799"
      },
      {
        id: 3,
        language: "Bootstrap",
        color: "#553C7B"
      }
    ]
  },
  {
    id: 2, 
    name: "Shortly",
    description: "This app refrence from front end mentor, This app using API .... for shortlink link what you want.",
    image: shortly.default,
    link: "https://shortly-chi.vercel.app/",
    languages: [
      {
        id: 1, 
        language: "ReactJS",
        color: "#18105C"
      }, 
      {
        id: 2,
        language: "SCSS",
        color: "#CD6799"
      },
      {
        id: 3,
        language: "Bootstrap",
        color: "#553C7B"
      }
    ]
  },
  {
    id: 3, 
    name: "Inwisnas",
    description: "This app contains vacational place in Indonesia you can see the places and the review of the places",
    image: inwisnas.default,
    link: null,
    languages: [
      {
        id: 1, 
        language: "ReactJS",
        color: "#18105C"
      }, 
      {
        id: 2, 
        language: "Laravel",
        color: "#F05340"
      }, 

      {
        id: 3,
        language: "SCSS",
        color: "#CD6799"
      },
      {
        id: 4,
        language: "Bootstrap",
        color: "#553C7B"
      }
    ]
  },
  {
    id: 4, 
    name: "Mori Wardrobe",
    description: "This app is e-commerce for ... suit, This app had fully responsive, The technologies use to this app is React JS, Express JS, Mongo DB, Node JS, Framer Motion, Bootstrap.",
    image: mori.default,
    link: null,
    languages: [
      {
        id: 1, 
        language: "ReactJS",
        color: "#18105C"
      }, 
      {
        id: 2, 
        language: "ExpressJS",
        color: "#000"
      }, 

      {
        id: 3,
        language: "SCSS",
        color: "#CD6799"
      },
      {
        id: 4,
        language: "Bootstrap",
        color: "#553C7B"
      }
    ]
  },
]
/*

Javascript: #F0DB4F
HTML : #E44D26
CSS: 3C99DC 
Laravel : F05340

*/