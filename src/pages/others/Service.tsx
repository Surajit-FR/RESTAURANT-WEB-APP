import { motion } from "framer-motion";
import PageTitle from "../../components/core/service_page/PageTitle";
import PageContent from "../../components/core/service_page/PageContent";

const Service = (): JSX.Element => {
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

                {/* <!-- Section --> */}
                <PageContent />

            </motion.div>

        </>
    )
}

export default Service