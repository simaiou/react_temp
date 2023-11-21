import { useState } from "react"
import Add from './Add'
import Item from './Item'
import './List.less'
type ItemData = {
    name: string,
    id: number
}
function List() {
    const [list, setList] = useState<Array<ItemData>>([
    ])
    const listContent = list.map((item) => (
        <ul>
            <Item key={item.id} name={item.name}></Item>
        </ul>
    ))
    const handleAdd = (inputValue: string) => {
        setList([
            ...list,
            {
                id: Math.random(),
                name: inputValue
            }
        ])
    }
    return (
        <>
            <div className="list-form">
                <Add onAdd={handleAdd}></Add>
                {listContent}
            </div>
        </>
    )
}
export default List