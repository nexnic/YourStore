export default function ContactForm () {
    return (
        <form>
            <label htmlFor="name"></label>
            <input type="text" id='name' value='full Name'/>
            <label htmlFor="email"></label>
            <input type="text"  id="email" value='Email'/>
            <label htmlFor="Subject"></label>
            <input type="text"  id="Subject" value='Subject'/>
            <textarea name="Body" id="Body" cols="30" rows="10" placeholder="Tell us"></textarea>
        </form>
    )
}