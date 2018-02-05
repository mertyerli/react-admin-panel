import React from "react";
import SamplePage from "../../pages/Tests/sample";
import Test1 from "../../pages/Tests/test1";
import Test2 from "../../pages/Tests/test2";

const SelectContent = (params) =>{
    console.log(params.path);
    switch (params.path){
        case '/test1' : 
        return <Test1/>        
        case '/test2' : 
        return <Test2/>

        default:
        return <SamplePage />
        
    }
}

export default SelectContent;
 