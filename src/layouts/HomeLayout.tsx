import HomeHeader from "../components/Headers/HomeHeader/HomeHeader";
import HomeHeaderTypes from "../types/HomeHeaderTypes";

const HomeLayout = ({ children }: HomeHeaderTypes) => {
    return (
        <div>
            <HomeHeader />
            <main>{children}</main>
        </div>
    );
};

export default HomeLayout;
