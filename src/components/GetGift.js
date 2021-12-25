import React from 'react'
import {useState, useEffect} from 'react'

function GetGift(){
    const gifts=['BCS', 'Hạ Vy', 'Iphone13 Promax',]
    const [gift, setGift] = useState()
    const randomGift  = () => {
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index]);
    }
    return(
        <div>
            <h1>{gift || 'Chưa có quà Noel đúng khum?'}</h1>
            <button onClick={randomGift}>
                Nhận quà từ ông nè
            </button>
        </div>
    )
}
export default GetGift