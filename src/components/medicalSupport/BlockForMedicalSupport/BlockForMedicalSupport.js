import React from 'react';

function BlockForMedicalSupport({data}) {
    return (
        <div>

                {data.map(item => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}

        </div>
    );
}

export default BlockForMedicalSupport;