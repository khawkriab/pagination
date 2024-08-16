import React, { useEffect, useRef, useState } from 'react';
import { EditOutlined, CopyOutlined, InboxOutlined, MoreOutlined } from '@ant-design/icons';

function Testdrop(isOpen, setIsOpen) {

    const items = [
        { label: 'Edit', icon: <i><EditOutlined /></i>, onClick: () => { console.log('Edit') } },
        { label: 'Duplicate', icon: <i><CopyOutlined /></i>, onClick: () => { console.log('Duplicate') } },
        { label: 'Archive', icon: <i><hr /><InboxOutlined /></i>, onClick: () => { console.log('Archive') } },
        { label: 'More', icon: <i><MoreOutlined /></i>, onClick: () => { console.log('More') } },
    ];
    return (
        <>
            <div>
                <Dropdown items={items} isOpen={isOpen} setIsOpen={setIsOpen}>Option </Dropdown>
            </div>
        </>
    );

    function Dropdown({ items, children }) {
        const [isOpen, setIsOpen] = useState(false)
        const bfnRef = useRef(null);
        console.log('bfnRef.current:', bfnRef.current)

        useEffect(() => {
            const closeDropdown = (e) => {
                console.log('e:', e)
                if (bfnRef.current && !bfnRef.current.contains(e.target)) {
                    setIsOpen(false);
                }
            }
            document.addEventListener('click', closeDropdown)
            return () => document.removeEventListener('click', closeDropdown)
        }, [])

        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div ref={bfnRef}>
                <div className='dropdown'>
                    <button className='dropdown-button' onClick={toggleDropdown}>
                        {children}
                    </button>
                    <div>
                        {isOpen && (
                            <div className='dropdown-head'>
                                <div className='dropdown-content'>
                                    {items.map((item) => (
                                        <div className='dropdown-select' onClick={item.onClick}>
                                            {item.icon} {item.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Testdrop;
