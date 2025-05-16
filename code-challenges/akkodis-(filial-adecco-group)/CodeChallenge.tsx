import React, {useEffect, useState} from 'react';
import './styles.css';

export default function App() {

    const [users, setUsers] = useState<UserI[]>([])
    const [usersFiltered, setUserFiltered] = useState<UserI[]>([])
    const [search, setSearch] = useState<string>('')

    useEffect(() => {
        updateUsers().then(r => console.log(r))
    }, [])

    const updateUsers = async (): Promise<void> => {
        const API_URL: string = 'https://jsonplaceholder.typicode.com/users'
        const response: Response = await fetch(API_URL)
        const users: UserI[] = await response.json()
        setUsers(users)
    }

    const deleteUser = (id: string = ''): void => {
        const newUsers: UserI[] = users.filter((user: UserI) => user.id !== id)
        setUsers(newUsers)
    }

    const searchUser = (text: string = ''): void => {
        setSearch(text)

        // TODO: normalize text (minus, accents, etc...)
        const result: UserI[] = users.filter((user) => user.name.includes(text))
        setUserFiltered(result)
    }


    return (<>
        <div className="App">
            <h1>Users</h1>
            <form action="">
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => searchUser(e.target.value)}
                />
            </form>
            <table>
                <thead></thead>
                <tbody>

                    {search === '' && users.map((user: UserI) => (
                        <tr key={user.id}>
                            <td>{user.name}
                                <button onClick={() => deleteUser(user.id)}> delete </button>
                            </td>
                        </tr>
                    ))}

                    {search !== '' && usersFiltered.map((user: UserI) => (
                        <tr key={user.id}>
                            <td>{user.name}
                                <button onClick={() => deleteUser(user.id)}> delete </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    </>)
}


// interface

interface UserI {
    id?: string;
    name: string;
    email: string;

    // sayHello(): string; // is not common
}