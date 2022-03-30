import React, { useLayoutEffect, useState } from "react";

const LayoutEffect = () => {
    const[value, setValue] = useState('GFG');

    useLayoutEffect(() => {
        if(value === 'GFG') {
            setValue("GeeksForGeeks");
        }
        console.log('UseLayoutEffect is called with the value of',
            value);
    }, [value]);
    return <div>{value} is greatest portal for geeks! </div>;
};

export default LayoutEffect;