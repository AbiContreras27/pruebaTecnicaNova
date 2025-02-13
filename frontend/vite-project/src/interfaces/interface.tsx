
export interface User {
    id: number;
    fullname: string;
    email: string;
    age: number;
    city: string;
}

export interface UserListProps {
    users: User[];
    onSelect: (user: User) => void;
}

export interface UserDetailsProps {
    user: User | null;
    onClose: () => void;
}

export interface SearchBarProps {
    onSearch: (search: string) => void
}

export interface UserContextType {
    userData: User[];
    filteredUsers: User[]
    SearchUsers: (searchText: string) => void;
}