  import { useState } from "react";
export default function Main(){
    
    const [nome,setNome] = userstate("")
    const [telefone,setTelefone] = userstate 

    return( 
         <main>
                <input

         type="text"
         nome="" id=""
        onChange={(event) => setNome(event.target.value)}
/>
        (nome)
                </main>
    );
}
