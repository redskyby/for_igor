import React from 'react';
import './Table.css';


const Table = ({data}) => {
    return (
        <table className="table">
            <thead className="header_border">
            <tr>
                <th colSpan="2" className="table_align_text_left table_header">Виды охотничьих ресурсов</th>
                <th className="table_align_text_right table_header">Такса (рублей РФ за 1 особь)</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td className="table_align_text_center"><p>{item.id}</p></td>
                    <td  className="table_align_text_left">{item.animal}</td>
                    <td className="table_align_text_right price">{item.price}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
