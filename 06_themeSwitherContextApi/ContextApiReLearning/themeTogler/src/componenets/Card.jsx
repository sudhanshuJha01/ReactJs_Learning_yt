import React from "react";
import useTheme from "../Contexts/theme";

export default function Card() {
    const {themeMode,lightTheme,darkTheme}=useTheme()
    
    const handleClick = ()=>{
            if(themeMode==='light'){
                darkTheme();
                themeMode==='dark';
            }else{
                lightTheme();
                themeMode==='light'
            }
    }
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img  className="p-8 rounded-md" src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                       Let`s come to The {themeMode==='light'?<span>Dark Side</span> :<span>Light Side</span>}
                    </h5>
                </a>
                <span className="text-xl m-4 dark:text-white">If you want to Enter <button className="bg-blue-600 text-white p-2 ml-3 mt-2 rounded-xl" onClick={handleClick}>Let`s Go</button> </span>
               
            </div>
        </div>
    );
}
