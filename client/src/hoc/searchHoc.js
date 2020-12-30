import {useState} from 'react'
export default (Component) => (props) => {
    const [value, setValue] = useState('');
    const changeValue = (e) => setValue(e.target.value) 
    return (
        <Component
            {...props}
            value = {value}
            changeValue = {changeValue}
        />
    )
}