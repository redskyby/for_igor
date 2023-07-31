import React from 'react';
import './Table.css';


const Table = ({data}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th colSpan="3">Виды охотничьих ресурсов</th>
                <th rowSpan="2">Цена</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td colSpan="2">{item.animal}</td>
                    <td>{item.price}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
