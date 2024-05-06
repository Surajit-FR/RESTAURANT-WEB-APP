import CovidModal from "../utils/CovidModal";
import Content from "./others/Content";
import CookieBar from "../utils/CookieBar";
import { motion } from "framer-motion";

const Index = (): JSX.Element => {

    return (
        <>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "100%", opacity: 1 }}
                exit={{ opacity: 0, y: -window.innerHeight }} // Fade out instantly
                transition={{ duration: 1 }} // Opacity transitions over 1 second, y movement is instant
            >
                {/* <!-- Content --> */}
                <Content />

                {/* <!-- Modal / COVID --> */}
                <CovidModal />

                {/* <!-- Cookies Bar --> */}
                <CookieBar />
            </motion.div>
        </>
    )
}

export default Index