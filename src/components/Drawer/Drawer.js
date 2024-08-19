import React, { useEffect, useRef, useState } from 'react';
import { EditOutlined, CopyOutlined, InboxOutlined, MoreOutlined } from '@ant-design/icons';

function TestDrawer() {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { label: 'Edit', icon: <EditOutlined />, onClick: () => { console.log('Edit') } },
        { label: 'Duplicate', icon: <CopyOutlined />, onClick: () => { console.log('Duplicate') } },
        { label: 'Archive', icon: <InboxOutlined />, onClick: () => { console.log('Archive') } },
        { label: 'More', icon: <MoreOutlined />, onClick: () => { console.log('More') } },
    ];

    return (
        <div className='drawer-nav'>
            <Drawer open={isOpen} setIsOpen={setIsOpen} items={items}>
                Open Drawer
            </Drawer>
        </div>
    );
}

function Drawer({ open, setIsOpen, items, children }) {
    console.log('open:', open)
    const drawerRef = useRef(null);
    console.log('drawerRef.current:', drawerRef.current)

    useEffect(() => {
        const closeDrawer = (e) => {
            console.log('e:', e)
            if (drawerRef.current && !drawerRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', closeDrawer);
        return () => document.removeEventListener('mousedown', closeDrawer);
    }, []);

    const toggleDrawer = () => {
        setIsOpen(!open);
    };

    return (
        <div ref={drawerRef}>
            <button className='drawer-button' onClick={toggleDrawer}>
                {children}
            </button>
            {open && (
                <div className='drawer-content'>
                    {items.map((item, index) => (
                        <div key={index} className='drawer-item' onClick={item.onClick}>
                            {item.icon} {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TestDrawer;
