import SectionAbout from "../../components/core/Content/SectionAbout"
import SectionBGImage from "../../components/core/Content/SectionBGImage"
import SectionMain from "../../components/core/Content/SectionMain"
import SectionMenu from "../../components/core/Content/SectionMenu"
import SectionOffers from "../../components/core/Content/SectionOffers"
import SectionSteps from "../../components/core/Content/SectionSteps"


const Content = (): JSX.Element => {
    return (
        <>
            {/* <!-- Content --> */}
            <div id="content">

                {/* <!-- Section - Main --> */}
                <SectionMain />

                {/* <!-- Section - About --> */}
                <SectionAbout />

                {/* <!-- Section - Steps --> */}
                <SectionSteps />

                {/* <!-- Section - Menu --> */}
                <SectionMenu />

                {/* <!-- Section - Offers --> */}
                <SectionOffers />

                {/* <!-- Section BG Image--> */}
                <SectionBGImage />

            </div>
            {/* <!-- Content / End --> */}
        </>
    )
}

export default Content;