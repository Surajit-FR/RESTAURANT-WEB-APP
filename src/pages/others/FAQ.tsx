import { motion } from "framer-motion";
import PageContent from "../../components/core/faq/PageContent";
import PageTitle from "../../components/core/faq/PageTitle";

const FAQ = (): JSX.Element => {
    return (
        <>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "100%", opacity: 1 }}
                exit={{ opacity: 0, y: -window.innerHeight }} // Fade out instantly
                transition={{ duration: 1 }} // Opacity transitions over 1 second, y movement is instant
            >

            </motion.div>
            {/* <!-- Page Title --> */}
            <PageTitle />

            {/* <!-- Page Content --> */}
            <PageContent />
        </>
    )
}

export default FAQ