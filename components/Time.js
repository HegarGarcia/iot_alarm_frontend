import Index  from '../pages/index';
import React from 'react';


const Hour = () => {
    var d = new Date();
    var hora = (d.getDate()).toString();
    return <span>{hora}</span>
    }
export default Hour;