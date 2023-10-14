// @ts-ignore
export default function Button({Class,Type, children, onClick}){
    return <button className={Class} type={Type} onClick={onClick}>{children}</button>
}