import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import Navbar from "../component/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
    useEffect(() => {
        initFlowbite();
    })
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;