
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
                <textarea id="fbody" cols="30" rows="10" {...register('fbody')} className="input__form--textfield"></textarea>
            </label>
            <input type="submit" />
        </form>
    )
}
/*
// FullName 
    const [fullName, setFullname] = useState('')
    const [reqFullName, setReqFullname] = useState(false)
    const fullNameMinLen = 3

    // Subject 
    const [subject, setSubject] = useState('')
    const [reqSubject, setReqSubject] = useState(false)
    const subjectMinLen = 3

    // Email
    const [email, setEmail] = useState('')
    const [reqEmail, setreqEmail] = useState(false)
    const EmailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    
    // Message 
    const [message, setMessage] = useState('')
    const [reqMessage, setReqMessage] = useState(false)
    const messageMinLen = 3

    function onChangeFullname(event){
        setFullname(event.target.value)
        if(fullName.length >=fullNameMinLen)(setReqFullname(true))
    }

    function onChangeSubject(event) {
        setSubject(event.target.value)
        if(subject.length >= subjectMinLen) setReqSubject(true)
    }

    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangeMessage(event) {
        setMessage(event.target.value)
        if(message.length >= messageMinLen) setReqMessage(true)
    }

    function onSubmitForm(event) {
        event.preventDefault()
        if(reqFullName && reqSubject && reqMessage) console.log('complett form')
        if(!reqFullName) alert('Need field out name')
        if(!reqSubject) alert('Need field out Subject')
        if(!reqMessage) alert('Need field out Message')

    } 
*/