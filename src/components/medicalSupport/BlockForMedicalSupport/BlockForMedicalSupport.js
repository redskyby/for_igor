import React from 'react';
import "./BlockForMedicalSupport.css"

function BlockForMedicalSupport({data}) {
    return (
        <div>

            {data.map(item => (
                <div key={item.id} className="BlockForMedicalSupport">
                    <div className="BlockForMedicalSupport_imgs">

                        {
                            item.img.map( item =>
                                <img key={item}  src={item} alt="BlockForMedicalSupport_imgs"/>
                            )

                        }

                    </div>

                    <div className="BlockForMedicalSupport_text">
                        <h3>{item.title}</h3>
                        {
                            item.description.map( item =>
                                <p key={item}>{item}</p>
                            )
                        }
                    </div>
                </div>
            ))}

        </div>
    );
}

export default BlockForMedicalSupport;