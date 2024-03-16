import { Paciente } from './Paciente'

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente}) => {
  
  return (
    <div className="md:w-1/2 lg:w-3/5  ">
      {
        pacientes && pacientes.length ? (
          <>
            <h2
              className="font-black text-3xl text-center">
              Listado Pasientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administra tus {''} <span className=" text-indigo-600 font-bold">Pacientes y Citas</span> </p>

            <div className="md:overflow-y-scroll h-[37rem]">
              {
                pacientes.map(paciente =>
                (
                  <Paciente
                    key={paciente.id}
                    paciente={paciente} 
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                    />
                )
                )
              }
            </div>
          </>

        ) : (
          <>
            <h2
              className="font-black text-3xl text-center">
              No ay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Comienza agregando {''} <span className=" text-indigo-600 font-bold">Pacientes</span> </p>

          </>
        )
      }



    </div>
  )
}
