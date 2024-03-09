import { Header } from "./components/Header"
import { Formulario } from "./components/Formulario"
import { ListadoPacientes } from "./components/ListadoPacientes"

export const VeterinariaConsultasApp = () => {
  return (
    <div className="container mx-auto ">
      <Header />
      <div className="md:flex gap-10">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
    
  )
}

