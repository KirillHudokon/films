import {useState} from 'react'
export default (Component) => (props) => {
    const timer = 500;
    const [value, setValue] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(0)
    const searchTimeoutHandler = (value) => {
        clearTimeout(searchTimeout)
        if(value){
            setSearchTimeout(setTimeout(()=>{
                console.log(value)
            },timer))
        }

    }
    const changeValue = (e) => {
        searchTimeoutHandler(e.target.value)
        setValue(e.target.value)
    } 
    return (
        <Component
            {...props}
            value = {value}
            changeValue = {changeValue}
        />
    )
}