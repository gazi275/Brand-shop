import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";

const Root = () => {
    useEffect(() => {
        initFlowbite();
    })
    return (
        <div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;