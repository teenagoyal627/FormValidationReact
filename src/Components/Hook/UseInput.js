import  { useState } from 'react'

const UseInput = (defaultValue,validationFn) => {
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);
 
    const valueIsValid=validationFn(enteredValue)

    const handleInputChange = (e) => {
        setEnteredValue(e.target.value);
        setDidEdit(false);
      };
    
      const handleInputBlur = () => {
        setDidEdit(true);
      };
    return {
        value:enteredValue,
        handleInputBlur,
        handleInputChange,
        hasError:didEdit && !valueIsValid
    }
}

export default UseInput
