import { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import UsersList from "./UsersList";
import { UserContext } from "../context/usersContext";
import { User } from "../interfaces/interface";
import UserDetails from "./UserDetails";

export default function Home() {
  const context = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  if (!context) {
    return <p className="text-center text-red-500">Error: No se pudo cargar el contexto</p>;
  }

  const { filteredUsers, SearchUsers } = context;

  return (
    <div className="p-4 m-10">
      <h1 className="text-center text-3xl font-bold text-blue-600 mb-6 drop-shadow-md animate-fade-in">
        Lista de Usuarios
      </h1>

      <SearchBar onSearch={SearchUsers} />
      <UsersList users={filteredUsers} onSelect={setSelectedUser} />
      {selectedUser && <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </div>
  );
}
