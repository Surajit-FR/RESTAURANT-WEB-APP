import { motion } from "framer-motion";
import PostSingle from "../../components/core/blog_post/PostSingle";

const BlogPost = () => {
    return (
        <>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "100%", opacity: 1 }}
                exit={{ opacity: 0, y: -window.innerHeight }} // Fade out instantly
                transition={{ duration: 1 }} // Opacity transitions over 1 second, y movement is instant
            >
                {/* <!-- Blog Post Single--> */}
                <PostSingle />
            </motion.div>
        </>
    )
}

export default BlogPost