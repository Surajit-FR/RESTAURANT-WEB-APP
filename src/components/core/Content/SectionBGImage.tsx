import { useState } from 'react';
import VideoModal from '../../../utils/VideoModal';

const SectionBGImage = (): JSX.Element => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            <section className="section section-lg dark bg-dark">
                <div className="bg-image bg-parallax">
                    <img src="http://assets.suelo.pl/soup/img/photos/bg-croissant.jpg" alt="" />
                </div>

                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="mb-3">Check our promo video!</h2>
                            <h5 className="text-muted">Book a table even right now or make an online order!</h5>
                            <button className="btn-play" onClick={toggleModal}></button>
                        </div>
                    </div>
                </div>
            </section>

            {modalVisible && <VideoModal videoUrl="https://www.youtube.com/embed/uVju5--RqtY" onClose={closeModal} />}
        </>
    );
};

export default SectionBGImage;