import { useEffect } from "react";

     // dynamic title 
 const useTitle =(title)=>{
        useEffect(()=>{
            document.title = title;
        },[title]);
    };
   export default useTitle;