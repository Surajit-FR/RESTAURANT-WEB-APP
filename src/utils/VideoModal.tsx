import { useEffect } from 'react';
import { VideoModalProps } from '../config/DataTypesInterface.config';

const VideoModal = ({ videoUrl, onClose }: VideoModalProps): JSX.Element => {
    useEffect(() => {
        // Add event listener to close modal when clicking outside of it
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.classList.contains('modal')) {
                onClose();
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="modal modal-video fade show" id="modalVideo" role="dialog" style={{ display: "block", paddingRight: "17px" }} aria-modal="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <button className="close" onClick={onClose}><i className="ti ti-close"></i></button>
                    <iframe title="Video Modal" height="500" src={videoUrl}></iframe>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;