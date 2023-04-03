
const carreira = prompt("Olá, deseja prosseguir como Back-End ou Front-End?");

if(carreira.toLowerCase() === 'front-end'){
  const especializacao = prompt ("Deseja aprender React ou Vue?");
  const mudanca = prompt ("Deseja seguir na carreira " +carreira+ " ou se tornar um full stack?")
  let aprendizado = " "

  while(aprendizado.toLowerCase() != "não"){
    aprendizado = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
    if(aprendizado.toLowerCase() != "não"){
      alert("Muito Interessante!");
    }

  }
}else if(carreira.toLowerCase() === 'back-end' ){
  const especializacao = prompt ("Deseja aprender C# ou Java?");
  const mudanca = prompt ("Deseja seguir na carreira " +carreira+ " ou se tornar um full stack?");
  let aprendizado = " "

  while(aprendizado.toLowerCase() != "não"){
    aprendizado = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
    if(aprendizado.toLowerCase() != "não"){
      alert("Muito Interessante!");
    } 
  }
}else{
  alert("Você não digitou nenhuma cidade válida");
}



