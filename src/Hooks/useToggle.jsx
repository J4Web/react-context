import React, { useState} from 'react';

function useToggle(toggle=false)
{
    const [data,setData]=useState(toggle);
    function flipData() 
    {
        setData(!data)
    }
    return [data,flipData];
}

export default useToggle