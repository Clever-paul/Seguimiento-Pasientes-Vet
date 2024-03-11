
export const Paciente = ({paciente}) => {
  
  const {nombre, propietario, email, fechaAlta, sintomas} = paciente
  return (
    <div className="mb-5 bg-white shadow-md px-5 py-10 rounded-xl md:mr-5 lg:mr-0">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case ">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className="font-normal normal-case ">{propietario}</span>
        </p>
        
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case ">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''}
        <span className="font-normal normal-case ">{fechaAlta}</span>
        </p>
        
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
        <span className="font-normal normal-case ">{sintomas}</span>
        </p>
      </div>
  )
}
