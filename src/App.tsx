import { FreeListing } from "./SubscriptionTheme/Free";
import { SideMenu } from "./SideMenu/SideMenu";
import { Navbar } from "./Navigator";
import { Card } from "./ProfileCard/Card";

function App () {
    return(
        <>
        <Navbar />
        <main className="flex">
        <SideMenu />
        <Card />
        </main>
        <FreeListing />
        </>
    )
}
export default App;