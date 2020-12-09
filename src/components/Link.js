import React from "react";

//custom router implementatin - still lot can be improved, experimenting
const Link = ({ className, href, children }) => {

    // prevent full page reload
    const anchor = {
        textDecoration: 'none'
    }

    const onClick = (event) => {
        // if ctrl or meta key are held on click, allow default behavior of opening link in new tab
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        //change the url in the history
        window.history.pushState({}, "", href)
        // responding to push state
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    return (
        <a style={anchor} href={href} onClick={onClick}>
            {children}
        </a>
    );
};

export default Link;