import PageContent from "./page_offer/PageContent";
import PageTitle from "./page_offer/PageTitle";
import { motion } from "framer-motion";

const PageOffer = (): JSX.Element => {
    return (
        <>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "100%", opacity: 1 }}
                exit={{ opacity: 0, y: -window.innerHeight }} // Fade out instantly
                transition={{ duration: 1 }} // Opacity transitions over 1 second, y movement is instant
            >

                {/* <!-- Page Title --> */}
                <PageTitle />

                {/* <!-- Page Content --> */}
                <PageContent />
            </motion.div>
        </>
    )
}

export default PageOffer