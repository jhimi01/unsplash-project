import React from 'react';
import NavigationBar from './component/Share/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <>
            <NavigationBar />
            <Outlet />
            </>
        </div>
    );
};

export default MainLayout;