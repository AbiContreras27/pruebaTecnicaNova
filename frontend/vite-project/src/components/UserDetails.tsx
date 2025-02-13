import { UserDetailsProps } from "../interfaces/interface";



export default function UserDetails({ user, onClose }: UserDetailsProps) {
  if(!user) return null
  
  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative text-center">
        <h2 className="text-xl font-semibold mb-4">Detalles</h2>
        <p>
          <strong>Nombre:</strong> {user.fullname}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Edad:</strong> {user.age}
        </p>
        <p>
          <strong>Ciudad:</strong> {user.city}
        </p>
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
        Cerrar
        </button>
      </div>
    </div>
  );
}
  
  
  