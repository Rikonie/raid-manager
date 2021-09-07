import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Actions} from "../../store/actions";


export const UserComponent: React.FC<any> = () => {
    const [user, setUser] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const dispatch = useDispatch();

    const UserChange = (event) => {
        setUser(event.target.value);
    };
    const UserPasswordChange = (event) => {
        setUserPassword(event.target.value);
    };

    const login = ()=>{
        dispatch(Actions.home.login({name: user, password: userPassword}));
    };
    return <>
        <div>
            <h1> Имя: {user} </h1>
            <h1> Пароль: {userPassword} </h1>
        </div>
        <div>
            <p>Имя:<input type="text" placeholder="Введите Имя" onChange={UserChange}/></p>
            <p>Пароль:<input type="password" placeholder="Введите пароль" onChange={UserPasswordChange}/></p>
        </div>
        <button onClick={login}> Login !</button>
    </>

};

