


const App = () => {

  const nom: string = 'John';
  // const nom = { prenom: "sam", nom: "fournier" };
  return (
    <div>
      <Bienvenue nom={nom} />
    </div>
  );
}

type Argument = {
  nom: string;
}


const Bienvenue = ({nom} : Argument) => {
  return (
    <div>
      <h1>Bienvenue {nom}</h1>
    </div>
  );
}



/**
 * *************************************************************
 * *************************************************************
 * *************************************************************
 * *************************************************************
 * *************************************************************
 */


// const App = () => {

//   const moi = {
//     prenom: "Samuel",
//     nom: "Fournier",
//     age: 24,
//   };

//   return (
//     <div>
//       <Bienvenue humain={moi} />
//     </div>
//   );
// }


// type Humain = {
//   prenom: string;
//   nom: string;
//   age: number;
// }

// type Argument = {
//   humain: Humain;
// }

// const Bienvenue = ({ humain }: Argument) => {
//   return (
//     <div>
//       <h1>Bienvenue {humain.nom} {humain.prenom} vous avez { humain.age} ans</h1>
//     </div>
//   );
// }




/**
 * *************************************************************
 * *************************************************************
 * *************************************************************
 * *************************************************************
 * *************************************************************
 */


// const App = () => {

//   const nom = 'Samuel';
//   // const nom = 'Sam';
//   return (
//     <div>
//       <Bienvenue nom={nom} />
//     </div>
//   );
// }

// type Argument = {
//   nom: "Samuel" | "John";
// }


// const Bienvenue = ({nom} : Argument) => {
//   return (
//     <div>
//       <h1>Bienvenue {nom}</h1>
//     </div>
//   );
// }

export default App;