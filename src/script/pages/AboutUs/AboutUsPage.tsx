import Story from "./Components/Story"
import Team from '../AboutUs/Components/Team'

// @ts-ignore
export default function AboutusPage({pageConfig}) {
    document.title = `${pageConfig[0].CompanyName} | About US`;
    return (
        <main className="main__aboutus">
            <Story/>
            <Team/>
        </main>
            
       
    )
}