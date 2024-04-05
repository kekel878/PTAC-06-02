import { useState } from "react";
export default function Main(){
    const [nome,setNome] = userstate("")  //(0) number // (true) boolean
    const  [telefone,setTelefone] = userstate(0)
    const [listaContato,setlistaContatos] = useState([])

    const registrar = (event) =>{
        event.proventDefault();
        alert ("olá")
        sertilistaContatos([...listaContato,
{
        nomeSalvo:nome,
        telefoneSalvo: telefone,
}
]);
    };
    console.table(listaContatos);

   return( 
 <main>
          <label htmlfor="nome">Nome:</label>
  <input
         type="text"
         nome="lorenzo delas "
         id="nome"
         value={nome}
         onChange={

        (event)=> setNome(event.target.value)}
      />

(nome)
      <label htmlfor="nomtelefone">Telefone:</label>
 <input
      type="tel"
      telefone="telefone-contato" 
      id="telefone"
      value ={telefone}
      onChange={
        (event)=> setTelefone(event.target.value)}/>
       
{Number}

      <button>Enviar</button>       
    
     <form/>
     {listaContato.map((contato, index)=>

 <div key={index}>

  <p>{contato.nomeSalvo}</p>
  <p>{contato.telefoneSalvo}</p>
 </div>
 )}

      </main>
    
    );


}

