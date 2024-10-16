import React, { useEffect, useState } from 'react';
import { HomeItem } from './Index'


function Home() {
    const [items,setItems] = useState([])

    useEffect(()=>{
        fetch('http://localhost:8000/items')
        .then(res=>res.json())
        .then((data)=>{
            setItems(data.items)
        })
    },[])

    return (
        <main>
            <div className="items-container">
                {items.map((item) => (
                    <HomeItem key={item.id} item={item}></HomeItem>
                ))}

            </div>
        </main>
    )
}

export default Home