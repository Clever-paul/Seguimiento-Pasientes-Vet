import {Paciente} from './Paciente'

export const ListadoPacientes = ({pacientes}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5  ">
      <h2
      className="font-black text-3xl text-center">
        Listado Pasientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">Administra tus {''} <span className=" text-indigo-600 font-bold">Pacientes y Citas</span> </p>
      
      <div className="md:overflow-y-scroll h-3/5">
        {
          pacientes.map( (paciente, index) => 
           (
              <Paciente 
              key={index}
              paciente={paciente} />
            )
          )
        }
      </div>
      
    </div>
  )
}
