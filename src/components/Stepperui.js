import React from 'react'

function Stepperitem({ label, descri }) {
    return (
        <div className='step-item' >
            <div className='item'> 
                <div className='box'>{label}</div>
                <div className='level'></div>
            </div>
            <div className='descrition'>
                <p>{descri}</p>
            </div>
        </div>
    )
}

function Stepperui({ currect, items }) {
    console.log('currect:', currect)
    console.log('items:', items)
    return (
        <div className='allbox'>
            {items.map((value) => (
                <Stepperitem label={value.label} descri={value.description} />
            ))}
        </div>
    )
    // return (
    //     <div className='allbox'>
    //         <div className='boxlabel1'>
    //             <div className='label1'>
    //                 <div className='imglabel1'>
    //                     <p>✓</p>
    //                 </div>
    //                 <div className='check'></div>
    //                 <div className='textlabel1'>
    //                     <p>Step label</p>
    //                 </div>
    //             </div>
    //             <div className='line1'></div>
    //             <div className='label2'>
    //                 <div className='imglabel2'>
    //                     <p>2</p>
    //                 </div>
    //                 <div className='textlabel2'>
    //                     <p>Step label</p>
    //                 </div>
    //             </div>
    //             <div className='line2'></div>
    //             <div className='label3'>
    //                 <div className='imglabel3'>
    //                     <p>3</p>
    //                 </div>
    //                 <div className='textlabel3'>
    //                     <p>Step label</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Stepperui