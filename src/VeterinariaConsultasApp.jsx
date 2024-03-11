import { useState } from "react"
import { Header } from "./components/Header"
import { Formulario } from "./components/Formulario"
import { ListadoPacientes } from "./components/ListadoPacientes"


export const VeterinariaConsultasApp = () => {
  const [pacientes, setPacientes] = useState([])

  return (
    <div className="container mx-auto ">
      <Header />
      <div className="md:flex gap-10 ">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPacientes pacientes={pacientes} />
      </div>
    </div>
    
  )
}

