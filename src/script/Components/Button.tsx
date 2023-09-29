export default function Button({Class,Type, children}){
    return <button className={Class} type={Type}>{children}</button>
}