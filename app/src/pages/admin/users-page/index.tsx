import React, { useState } from "react";
import SearchFilter from "@/features/search";
import AddUserForm from "@/features/admin/add-user-form/ui";

// Пример интерфейса пользователя
interface User {
    id: number;
    name: string;
}

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: "Амилия" },
        { id: 2, name: "Иван" },
        { id: 3, name: "Алексей" },
        { id: 4, name: "Мария" },
    ]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

    // Функция поиска пользователей
    const handleSearch = (query: string) => {
        if (!query) {
            setFilteredUsers(users); // Если пустой запрос, отображаем все пользователи
            return;
        }

        // Фильтрация пользователей по имени (нечувствительно к регистру)
        const filtered = users.filter((user) =>
            user.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    return (
        <div className="dark:text-white w-full">
            <h1 className="text-2xl ">Пользователи</h1>
            <div className="h-1 bg-purple "></div>
            <div>
                <AddUserForm/>
            </div>
            <div className="mb-6">
                <SearchFilter
                    onSearch={handleSearch}
                    className="w-[1036px] h-[54px]"
                    placeholder="Поиск по фамилии"
                />
            </div>

            {/* Список пользователей */}
            <div>
                {filteredUsers.length === 0 ? (
                    <p>Нет результатов для поиска</p>
                ) : (
                    <ul>
                        {filteredUsers.map((user) => (
                            <li key={user.id} className="text-lg">{user.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default UsersPage;
