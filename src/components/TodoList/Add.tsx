import { useState } from "react"
import { Button, Input } from 'antd'
// import './Add.less'
type AddProps = {
    onAdd: (value: string) => void;
};
function Add({ onAdd }: AddProps) {
    const [inputValue, setInputValue] = useState('')
    const handleAdd = () => {
        onAdd(inputValue)
        setInputValue("");
    }
    const handleInputChange = (e: any) => {
        setInputValue(e.target.value)
    }
    return (
        <>
            <Input value={inputValue} style={{width:200,marginRight:10}} onChange={handleInputChange}></Input>
            <Button type="primary" onClick={handleAdd}>Add</Button>
        </>
    )
}
export default Add