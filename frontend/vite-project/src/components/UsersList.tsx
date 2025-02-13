import { UserListProps } from "../interfaces/interface";



export default function UsersList({ users, onSelect }: UserListProps) {
  return (
    <div className="flex justify-center">
      <ul className="mt-6 w-full max-w-lg bg-white shadow-lg rounded-xl overflow-hidden border border-gray-300">
        {users.length > 0 ? (
          users.map((user) => (
            <li
              key={user.id}
              className="p-4 flex flex-col gap-1 bg-white hover:bg-blue-100 focus:bg-blue-200 cursor-pointer transition-all duration-200 border-b border-gray-200 last:border-none"
              onClick={() => onSelect(user)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && onSelect(user)}
            >
              <span className="text-lg font-semibold text-gray-900">{user.fullname}</span> 
              <p className="text-sm text-gray-600">{user.email}</p>
            </li>
          ))
        ) : (
          <li 
            className="p-6 text-gray-500 text-center" 
            aria-live="polite"
          >
            No se encontro resultados.
          </li>
        )}
      </ul>
    </div>

    
  );
};


