import React, { useEffect } from 'react'
import './NavSlider.css'
import images from '../images'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function NavSlider () {
    useEffect(() => {
        productScroll();
    })

    function getCount (parent, getChildrensChildren) {

        // get count of items in the slider
        let relevantChildren = 0;
        let children = parent.childNodes.length;
        for (let i = 0; i < children; i++) {
            if (parent.childNodes[i].nodeType !== 3) {
                if (getChildrensChildren)
                    relevantChildren += getCount(parent.childNodes[i], true);
                relevantChildren++;
            }
        }
        return relevantChildren;
    }

    function translateX (position, slide) {
        //translate slider items - slide position 
        slide.style.left = position * -210 + "px";
    }

    function productScroll () {
        let slider = document.getElementById("slider");
        let next = document.getElementsByClassName("nav-pro-next");
        let prev = document.getElementsByClassName("nav-pro-prev");
        let slide = document.getElementById("slide");
        let item = document.getElementById("slide");

        for (let i = 0; i < next.length; i++) {

            let position = 0; //set initial slider postion

            //event listener for prev action
            prev[i].addEventListener("click", function () {
                if (position > 0) {
                    position -= 1;
                    translateX(position, slide);
                }
            });

            //next action - slide right
            next[i].addEventListener("click", function () {
                if (position >= 0 && position < hiddenItems(item, slider)) {
                    position += 1;
                    translateX(position, slide);
                }
            });
        }
    }

    function hiddenItems (item, slider) {
        //get hidden items
        let items = getCount(item, false);
        let visibleItems = slider.offsetWidth / 210;
        return items - Math.ceil(visibleItems);
    }

    return (
        <div className="nav-slider" id="slider">
            <div className="nav-slide" id="slide">
                {images.map(({ id, src, alt }) => {
                    return (
                        <img key={id} className="nav-item" alt={alt} src={src} />
                    )
                })}
            </div>
            <button className="nav-ctrl-btn nav-pro-prev"><FaAngleLeft /></button>
            <button className="nav-ctrl-btn nav-pro-next"><FaAngleRight /></button>
        </div>
    )
}
