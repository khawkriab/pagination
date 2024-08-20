import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Exstate from '../pages/ex/exstate';
import Drawer from '../components/Drawer/Drawer';
import Pagination from '../components/Pagination/Pagination';
import Table from '../components/Table/Table';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Exstate />} />
            <Route path='/drawer' element={<Drawer />} />
            <Route path='/pagination' element={<Pagination />} />
            <Route path='/table' element={<Table />} />
        </Routes>
    );
}

export default AppRoutes;
