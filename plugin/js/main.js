(() => {

    document.addEventListener("click", e => {
        const event = getScheduleElement(e);

        if (!event) {
            return;
        }

        const checkPopup = () => {
            const popup = getPopup();

            if (popup) {

                retunCode = injectPopup(popup, getCalenderLocation(event));
            } else {

                setTimeout(checkPopup, 30);
            }
        };

        checkPopup();
    });

})();
