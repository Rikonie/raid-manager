import React, {useState} from "react";


export const UserComponent: React.FC<any> = ({name, password}) => {
    const [user, setUser] = useState('Введите данные');
    const [userPassword, setUserPassword] = useState('Введите пароль');

    const UserChange = (event) => {
        setUser(event.target.value);
    }
    const UserPasswordChange = (event) => {
        setUserPassword(event.target.value);
    }
    return <>
        <div>
            <h1> Имя: {user} </h1>
            <h1> Пароль: {userPassword} </h1>
        </div>
        <div>
            <p>Имя:<input type="text" placeholder="Введите Имя" onChange={UserChange}/></p>
            <p>Пароль:<input type="password" placeholder="Введите пароль" onChange={UserPasswordChange}/></p>
        </div>
    </>
};

