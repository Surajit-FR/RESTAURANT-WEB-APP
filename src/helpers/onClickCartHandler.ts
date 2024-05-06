const toggleClassAndStyle = (element: HTMLElement, className: string | null, styleProperty: string | null, styleValue: string | null) => {
    if (element) {
        // Toggle class
        if (className !== null) {
            if (element.classList.contains(className)) {
                element.classList.remove(className);
            } else {
                element.classList.add(className);
            }
        }

        // Toggle style
        if (styleProperty !== null && styleValue !== null) {
            if (element.style[styleProperty as any] === styleValue) {
                element.style[styleProperty as any] = '';
            } else {
                element.style[styleProperty as any] = styleValue;
            }
        }
    } else {
        console.error(`Element is null or undefined.`);
    }
};

export const onClickCartHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault(); // Prevents the default action of the button tag
    const bodyOverlay = document.getElementById('body-overlay');
    const panelCart = document.getElementById('panel-cart');

    if (bodyOverlay && panelCart) {
        toggleClassAndStyle(bodyOverlay, null, 'display', 'block');
        toggleClassAndStyle(panelCart, 'show', 'display', 'block');
    } else {
        console.error(`One or both elements not found.`);
    }
};