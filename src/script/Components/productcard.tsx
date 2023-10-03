import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function ProductCard({item}) {
    const {id, title, imageUrl} = item 

    const navigate = useNavigate()

    function handlereClick(id) {
        navigate(`/product/${id}`)
    }

    return (
        <div className="card" id={id} onClick={()=> handlereClick(item.id)}>
            <img src={imageUrl} alt={title}/>
            <div className="card__text">
                <h4>{title}</h4>
            </div>
            <div className="card__btn">
            </div>
        </div>
    )

}

