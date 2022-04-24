


const AppJs = () => {

    const nom = 123;
    // const nom = { prenom: "sam", nom: "fournier" };
    
    return (
      <div>
       <Bienvenue nom={nom}  />
      </div>
    );
}
  


const Bienvenue = ({nom}) => {
    return (
        <div>
            <h1>Bienvenue {nom} ! </h1>
        </div>
    );
}


export default AppJs;
  


