import { useCallback, useEffect } from "react";

const CovidModal = (): JSX.Element => {
    // Function to close the modal
    const closeModal = () => {
        const modal = document.getElementById('exampleModal');
        if (modal) {
            modal.classList.remove('show');
            modal.style.display = 'none';
            modal.style.background = 'none';
        }
    };

    // Function to show the modal when the component mounts
    const showModal = useCallback(() => {
        // Select the modal element by its id
        const modal = document.getElementById('exampleModal');
        // Check if modal exists before trying to manipulate it
        if (modal) {
            modal.classList.add('show');
            modal.style.display = 'block';
            modal.style.background = '#00000080';

            // Close modal when clicking on close icon
            const closeModalIcon = modal.querySelector('.close');
            closeModalIcon?.addEventListener('click', () => {
                closeModal();
            });

            // Close modal when clicking outside the modal
            window.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeModal();
                }
            });
        }
    }, []);

    useEffect(() => {
        // Call the function to show the modal when the component mounts
        showModal();
        // Clean up function to remove event listeners when the component unmounts
        return () => {
            window.removeEventListener('click', closeModal);
        };
    }, [showModal]); // Empty dependency array ensures that this effect runs only once on component mount

    return (
        <>
            {/* <!-- Modal / COVID --> */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header modal-header-lg dark bg-dark">
                            <div className="bg-image"><img src="http://assets.suelo.pl/soup/img/photos/modal-covid.jpg" alt="" />
                            </div>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><i
                                className="ti ti-close"></i></button>
                        </div>
                        <div className="modal-body">
                            <h3>We are COVID-19 safe!</h3>
                            <p>In sed massa tempus, dapibus est pulvinar, pellentesque tellus. Donec ultricies magna nec mauris
                                ornare venenatis. Duis fermentum est diam, in molestie tellus venenatis id. In ut efficitur mi,
                                vel hendrerit libero. Phasellus ac vulputate lorem, pharetra tempor leo. Fusce eu dui libero.
                            </p>
                            <button className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}><span>Ok, thanks!</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CovidModal