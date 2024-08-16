import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Exstate from './pages/ex/exstate'
import Drawer from './components/Drawer'
import Pagination from './components/Pagination'

function AppRoutes() {
    return (

        <Routes>
            <Route path='/' element={<Exstate />}></Route>
            <Route path='/drawer' element={<Drawer />}></Route>
            <Route path='/pagination' element={<Pagination />}></Route>
        </Routes>
        // <Routes>
        //     <Route path="/" element={<Layout />}>
        //         <Route index element={<Home />} />
        //         <Route path="about" element={<About />} />
        //         <Route path="dashboard" element={<Dashboard />} />

        //         {/* Using path="*"" means "match anything", so this route
        //         acts like a catch-all for URLs that we don't have explicit
        //         routes for. */}
        //         <Route path="*" element={<NoMatch />} />
        //     </Route>
        // </Routes>
    )
}

export default AppRoutes