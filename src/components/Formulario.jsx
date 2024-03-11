import { useState } from "react";
import { Error } from "./Error";
export const Formulario = ({pacientes, setPacientes}) => {
  
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fechaAlta, setFechaAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault();
    if ([nombre, propietario, email, fechaAlta, sintomas].includes('')){
      setError(true)
      return;
    }
    setError(false)
    //construimos un objeto de pacientes
    const objetoPacientes ={
      nombre, 
      propietario, 
      email, 
      fechaAlta, 
      sintomas,
    }
    
    setPacientes([...pacientes, objetoPacientes])
    
    setNombre('')
    setPropietario('')
    setEmail('')
    setFechaAlta('')
    setSintomas('')
  }
  

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">Añadir Pacientes y{""} 
      <span className="text-indigo-600 font-bold" >Administralos</span></p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 md:ml-5 lg:ml-0" >
        {
          error && 
          <Error><p>Todos los campos son Obligatorios</p></Error>
        }
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input 
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota" 
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            onChange={(e) => {setNombre(e.target.value)}}
            value={nombre}
            
          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario</label>
          <input 
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario" 
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            onChange={(e) => {setPropietario(e.target.value)}}
            value={propietario}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input 
            id="email"
            type="email"
            placeholder="Email contacto Propietario" 
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            onChange={(e) => {setEmail(e.target.value)}}
            value={email}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
          <input 
            id="alta"
            type="date"
           
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            onChange={(e) => {setFechaAlta(e.target.value)}}
            value={fechaAlta}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea 
            id="sintomas"
            type="text"
            placeholder="Describa los Sintomas de la Mascota" 
            className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
            onChange={(e) => {setSintomas(e.target.value)}}
            value={sintomas}
          />
        </div>
        <input 
        type="submit"
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
         hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
         onClick={handleSubmit}
         />

      </form>
    </div>
  )
}
