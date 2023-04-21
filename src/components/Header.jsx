import { Input } from 'antd'

export default function  Header({ setItemList, setLoading}) {
    const handleAdd = async (value) => {

        if(value.Lenght < 3) return

        setLoading(true) // turn on spinner

        const newItem = {
            done: false,
            useId: "me",
            item: value, // what the user typed in is "value"
        }
        const response = await fetch('https://to-do-api-barb.web.app/items', {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(newItem),
        })

        const data = await response.json()
        setItemList(data)
        setLoading(false)
    }
    return (
        <header>
            <Input.Search
            allowClear
            enterButton="Add"
            size='Large'
            onSearch={handleAdd}
            placeholder = 'Adfd new to do item' />

        </header>
        )
}