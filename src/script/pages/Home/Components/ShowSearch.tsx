import { useNavigate } from 'react-router-dom';
// @ts-ignore
export default function ShowSearch({item}) {
    const {id, title, description,imageUrl} = item
    const navigate = useNavigate()

    // @ts-ignore
    function handlereClickProduct(id) {
        navigate(`/product/${id}` )
    }
    
    return(
    <div id={id} onClick={()=> handlereClickProduct(id)} className='search__list'>
        <img src={imageUrl} alt={title} style={{height: '24px'}}/>
        <div className='search__list--info'>
            <small className='heading__small'>{title}</small>
            <small>{description}</small>
        </div>
    </div>
    )
    
}