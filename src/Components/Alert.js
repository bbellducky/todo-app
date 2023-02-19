import React from 'react'
import { useEffect } from 'react'
const Alert = ({ msg, type, setAlert, list }) => {
    useEffect(() => {
        const timeOut = setTimeout(()=>{
            setAlert({show:false,msg:'',type:''})
        },1000)
        return ()=>clearInterval(timeOut)
    }, [list])
    return (
        <div>
            <p className={`alert ${type}`}>{msg}</p>
        </div>
    )
}

export default Alert
