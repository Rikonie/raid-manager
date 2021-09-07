import React from "react";
import { Link } from "react-router-dom";

export const SideBarComponent = () => {
    return (
        <ul>
                    <li><Link to="/home">Главная</Link></li>
                    <li><Link to="/guild">Гильдия</Link></li>
                    <li><Link to="/timetable">Расписание рейдов</Link></li>
                    <li><Link to="/composition">Состав</Link></li>
                    <li><Link to="/statistics">Статистика</Link></li>
                    <li><Link to="/calculator">Калькулятор рейда</Link></li>
                    <li><Link to="/nextdoor">piska Бродячего</Link></li>
                    <li><Link to="/raiders">Рейдеры</Link></li>
                    <li><Link to="/create_raiders">Создать рейдера</Link></li>
                    <li><Link to="/create_raid">Создать рейд в календаре</Link></li>
        </ul>
    );
}