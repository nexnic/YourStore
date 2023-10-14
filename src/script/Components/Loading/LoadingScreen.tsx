// @ts-ignore
export default function LoadingScreen({pageConfig}){

   return(
    <div className="cardloading">
        <h2>{pageConfig[0].CompanyName}</h2>
        <p>{pageConfig[0].CompanySlogen}</p>
        <div className="spinner">
            <div></div>
            <div></div>
        </div>
        <p>Loading API..</p>
    </div>

   )
}