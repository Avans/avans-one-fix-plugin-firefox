// (() => {

const getScheduleElement = (e) => {
    return e.target.closest(SCHEDULE_SELECTOR);
}

const getCalenderLocation = (event) => {
    return event.querySelector(LOCATION_SELECTOR)?.innerText || NO_LOCATION_ERROR;
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
    if (location == NO_LOCATION_ERROR && !e.classList.contains(ERROR_TEXT_CLASS)) {
        e.classList.add(ERROR_TEXT_CLASS);
    } else if (location != NO_LOCATION_ERROR) {
        e.classList.remove(ERROR_TEXT_CLASS)
    }
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
    }

    createLocationElement(popup.querySelector(".calender-item-details-wrapper"), location)
}

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


// })();
