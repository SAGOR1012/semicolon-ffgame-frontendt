import GameTypeCard from "../../Components/GameTypeCard/GameTypeCard";
import WarningPopup from "../../Components/PopupCard/WarningPopup";
import Banner from "./banner/Banner";

const Home = () => {
    return (
        <div className="bg-primary-bg-image ">
            <WarningPopup></WarningPopup>            {/* warning Popup */ }

            <Banner></Banner>
            <GameTypeCard></GameTypeCard>
        </div>
    );
};

export default Home;