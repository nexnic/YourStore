import { useNavigate } from 'react-router-dom';

export default function ShowSearch({item}) {
    const {id, title, description,imageUrl} = item
    const navigate = useNavigate()


    function handlereClickProduct(id) {
        navigate(`/product/${id}` )
    }
    
    return(
    <li id={id} onClick={()=> handlereClickProduct(id)} className='search__list'>
        <img src={imageUrl} alt={title} style={{height: '24px'}}/>
        <small>{title}</small>
        <small>{description}</small>
    </li>
    )
    
}