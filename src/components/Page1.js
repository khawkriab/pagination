import React from 'react';

function Page1({ item, ondelect }) {

    return (
        <div className="page-box">
            <div className="page-text">
                {item.map((value, index) => (
                    <div>
                        <span>ชื่อ{value.name}</span>
                        <span>อายุ{value.age}</span>
                        <button className="page-button" type="button" onClick={() => ondelect(index)}>
                            Delete
                        </button>
                    </div>
                ))}

            </div>
        </div >
    );
}

export default Page1;
