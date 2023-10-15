import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TotalPrice from './TotalPrice';

const schema = yup.object().shape({
    fullName: yup.string()
        .min(3, 'Need to be longer then 3 words')
        .required('Please enter name'),
    streetRoad: yup.string()
        .min(4, 'Need to be longer then 4 words')
        .required('Please Street Road'),
    postalcode: yup.string()
        .required('Please Postal code')
        .matches(/^[0-9]{4}/, "Postal code must be 4 Digits"),
    creditNumber: yup.string()
        .required('Credit card Number is required')
        .matches(/^[0-9]{16}/, "Credit Card number must be 16 Digits"),
    cardOwner: yup.string()
        .min(3, 'Need to be longer then 3 words')
        .required('Please enter name'),
    CVC: yup.string()
        .required('Credit card Number is required')
        .matches(/^[0-9]{3}/, 'Credit Card number must be 3 Digits')

})
// @ts-ignore
export default function CheckoutDetailts ({cart, handlerComplet}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    // @ts-ignore
    function onSubmit(data) {
        console.log(data);
        handlerComplet()
    }
      

    return (
        <div className='checkoutPage__container--detailts'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='detailts__shipping'>
                    <h3>Shipping</h3>
                    <br/>
                    <label htmlFor="fullName">
                        <input {...register('fullName')} type="text" placeholder='Your Name' id="fullName" className='input__form'/>
                    </label>
                    <p className='errortext'>{errors.fullName?.message}</p>
                    <label htmlFor="streetRoad" >
                    <input {...register('streetRoad')} type="text" placeholder='Shipping address' id="streetRoad" className='input__form'/>
                    </label>
                    <p className='errortext'>{errors.streetRoad?.message}</p>
                    <label htmlFor="postalcode">
                        <input {...register('postalcode')} type="number" placeholder='Postal code' id="postalcode" className='input__form'/>
                    </label>
                    <p className='errortext'>{errors.postalcode?.message}</p>
                    <br/>
                </div>
                <div className='detailts__payment'>
                    <h3>Paymeny Informasjon</h3>
                    <label htmlFor="creditNumber">
                        <input {...register('creditNumber')} type="number" id='creditNumber' placeholder='Card Number' className='input__form'/>
                    </label>
                    <p className='errortext'>{errors.creditNumber?.message}</p>
                <label htmlFor="cardOwner">
                    <input {...register('cardOwner')} type="text" placeholder='Card Owner' id="cardOwner" className='input__form' />
                </label>
                <p className='errortext'>{errors.cardOwner?.message}</p>
                <label htmlFor="CVC">
                    <input {...register('CVC')} type="number" id="CVC" placeholder='CVC'  className='input__form'/>
                </label>
                <p className='errortext'>{errors.CVC?.message}</p>
                <br/>
                </div>
                
                <TotalPrice cart={cart} key={cart.id}/>
                <input type="submit" className='btn__primary'/>
            </form>
        </div>
    )
}

