(() => {


    const getScheduleElement = (e) => {
        return e.target.closest(SCHEDULE_SELECTOR);
    }

    const getCalenderLocation = (event) => {
        return event.querySelector(LOCATION_SELECTOR)?.innerText || "Unknown Error";
    }

    const getPopup = () => {
        return document.querySelector(POPUP_SELECTOR);
    }

    const createLocationElement = (wrapper, location) => {
        const e = htmlLocationElement(location);
        wrapper.appendChild(e);
    }


    const updateLocationElement = (location) => {
        const e = getLocationText();
        e.innerText = location;
    }

    const getLocationText = () => {
        return document.querySelector(`#${CUSTOM_LOCATION_TEXT}`)
    }

    const getLocationElement = () => {
        return document.querySelector(`#${CUSTOM_LOCATION_WRAPPER}`)
    }

    const injectPopup = (popup, location) => {

        if (getLocationElement()) {
            updateLocationElement(location)
            return
        }

        if (!popup) {
            console.error('no popup found');
            return;
        }

        createLocationElement(popup.querySelector(".calender-item-details-wrapper"), location)
    }

    document.addEventListener("click", e => {
        const event = getScheduleElement(e);

        if (!event) {
            return;
        }
        
        injectPopup(getPopup(), getCalenderLocation(event));
    });

    console.log("Loaded Avans one fix extention")

})();
