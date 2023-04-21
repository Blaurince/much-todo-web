import { useEffect } from 'react'
import { List } from 'antd'

export default function TodoList ({ loading, itemList, setItemList, setLoading}) {

    useEffect(() => {
        fetch('https://to-do-api-barb.web.app/items')
        .then( res => res.json())
        .then(setItemList)
        .catch(alert) // we can do better
        .finally(() => setLoading(false))
    }, 
    []);



    

    return(
        <section>
        <List 
        bordered
        dataSource={itemList}
        loading={loading}
        size='Large'
        renderItem={(task) => (
            <List.Item className={(task.done) && 'done'}>
             {task.item}
            </List.Item>
    )}
        />
        
        </section>
    )

}