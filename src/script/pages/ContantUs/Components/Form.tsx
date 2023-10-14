
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    fullname: yup
        .string()
        .min(3, 'Writh Your fullname')
        .required('Please enter your fullname'),
    Subject: yup
        .string()
        .min(3, 'Writh Your Subject')
        .required('Need to be longer then 3 words'),
    email: yup
        .string()
        .required('Email is required'),
    fbody: yup
        .string()
        .min(3, 'Writh Your Subject')
        .required('Need to be longer then 3 words'),

}).required()



export default function ContactForm () {
// Default Setting for Form
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
}
    

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="fullname">
                <input {...register('fullname')} id='fullname' type='text' className="input__form"/>
            </label>
            <small>{errors.fullname?.message}</small>
            <label htmlFor="subject">
                <input {...register('Subject')} id='subject' type='text' className="input__form"/>
            </label>
            <small>{errors.Subject?.message}</small>
            <label htmlFor="email">
                <input {...register('email', {
                    required: 'required',
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                    }
                })} id='email' type="email" className="input__form"/>
            </label>
            <small>{errors.email?.message}</small>
            <label htmlFor="fbody">
                <textarea id="fbody"  {...register('fbody')} className="input__form--textfield"></textarea>
            </label>
            <input type="submit" />
        </form>
    )
}