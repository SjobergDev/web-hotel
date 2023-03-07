import React from "react";
import { useParams } from "react-router-dom";
import DynamicPage from "./DyamicPage";

function DynamicPageWrapper(){

    let test = useParams();
    console.log(test);
    return<DynamicPage id={test.id || ''}></DynamicPage>
}
export default DynamicPageWrapper;