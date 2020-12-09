import React, { Component } from 'react'
import './Slider.css'
import shirtImg from '../../assets/images/shirt.png'
import pantsImg from '../../assets/images/pants.png'

export default class Slider extends Component {
    componentDidMount () {
        window.addEventListener('resize', this.slide)
        this.slide();
    }

    slide () {
        let wrapper = document.getElementById('slider'),
            items = document.getElementById('slides');
        if (window.screen.width < 768) {
            items = document.getElementById('mobileslides')
        }
        let posX1 = 0,
            posX2 = 0,
            posInitial,
            posFinal,
            threshold = 100,
            slides = items.getElementsByClassName('slide'),
            slidesLength = slides.length,
            slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
            firstSlide = slides[0],
            lastSlide = slides[slidesLength - 1],
            cloneFirst = firstSlide.cloneNode(true),
            cloneLast = lastSlide.cloneNode(true),
            index = 0,
            allowShift = true;

        // Clone first and last slide
        items.appendChild(cloneFirst);
        items.insertBefore(cloneLast, firstSlide);
        wrapper.classList.add('loaded');

        // Mouse events
        items.onmousedown = dragStart;

        // Touch events
        items.addEventListener('touchstart', dragStart);
        items.addEventListener('touchend', dragEnd);
        items.addEventListener('touchmove', dragAction);

        // Transition events
        items.addEventListener('transitionend', checkIndex);

        function dragStart (e) {
            e = e || window.event;
            e.preventDefault();
            posInitial = items.offsetLeft;

            if (e.type === 'touchstart') {
                posX1 = e.touches[0].clientX;
            } else {
                posX1 = e.clientX;
                document.onmouseup = dragEnd;
                document.onmousemove = dragAction;
            }
        }

        function dragAction (e) {
            e = e || window.event;

            if (e.type === 'touchmove') {
                posX2 = posX1 - e.touches[0].clientX;
                posX1 = e.touches[0].clientX;
            } else {
                posX2 = posX1 - e.clientX;
                posX1 = e.clientX;
            }
            items.style.left = (items.offsetLeft - posX2) + "px";
        }

        function dragEnd (e) {
            posFinal = items.offsetLeft;
            if (posFinal - posInitial < -threshold) {
                shiftSlide(1, 'drag');
            } else if (posFinal - posInitial > threshold) {
                shiftSlide(-1, 'drag');
            } else {
                items.style.left = (posInitial) + "px";
            }

            document.onmouseup = null;
            document.onmousemove = null;
        }

        function shiftSlide (dir, action) {
            items.classList.add('shifting');

            if (allowShift) {
                if (!action) { posInitial = items.offsetLeft; }

                if (dir === 1) {
                    items.style.left = (posInitial - slideSize) + "px";
                    index++;
                } else if (dir === -1) {
                    items.style.left = (posInitial + slideSize) + "px";
                    index--;
                }
            };

            allowShift = false;
        }

        function checkIndex () {
            items.classList.remove('shifting');

            if (index === -1) {
                items.style.left = -(slidesLength * slideSize) + "px";
                index = slidesLength - 1;
            }

            if (index === slidesLength) {
                items.style.left = -(1 * slideSize) + "px";
                index = 0;
            }

            allowShift = true;
        }
    }

    render () {
        return (
            <div className="slider-container">
                <p className="slider-heading"><span>LATEST COLLECTIONS</span></p>
                <div id="slider" className="slider">
                    <div className="wrapper">
                        <div id="slides" className="slides desktopSlider">
                            <div style={{ display: 'flex', flexDirection: "row" }} className="slide">
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image1"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image1"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image2"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image2"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: "row" }} className="slide">
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: "row" }} className="slide">
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: "row" }} className="slide">
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: "row" }} className="slide">
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={shirtImg} alt="shirt image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                                <div className="slide-image">
                                    <img src={pantsImg} alt="pants image3"></img>
                                    <div className="image-text">
                                        <div className="item-name">Printed Polo T-Shirt</div>
                                        <div className="item-price">1,499.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="mobileslides" className="slides mobileSlider">
                            <div className="slide-image slide">
                                <img src={shirtImg} alt="shirt image3"></img>
                                <div className="image-text">
                                    <div className="item-name">Printed Polo T-Shirt</div>
                                    <div className="item-price">1,499.00</div>
                                </div>
                            </div>
                            <div className="slide-image slide">
                                <img src={pantsImg} alt="pants image3"></img>
                                <div className="image-text">
                                    <div className="item-name">Printed Polo T-Shirt</div>
                                    <div className="item-price">1,499.00</div>
                                </div>
                            </div>
                            <div className="slide-image slide">
                                <img src={pantsImg} alt="pants image3"></img>
                                <div className="image-text">
                                    <div className="item-name">Printed Polo T-Shirt</div>
                                    <div className="item-price">1,499.00</div>
                                </div>
                            </div>
                            <div className="slide-image slide">
                                <img src={pantsImg} alt="pants image3"></img>
                                <div className="image-text">
                                    <div className="item-name">Printed Polo T-Shirt</div>
                                    <div className="item-price">1,499.00</div>
                                </div>
                            </div>
                            <div className="slide-image slide">
                                <img src={pantsImg} alt="pants image3"></img>
                                <div className="image-text">
                                    <div className="item-name">Printed Polo T-Shirt</div>
                                    <div className="item-price">1,499.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
