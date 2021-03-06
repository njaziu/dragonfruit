import React, { Component } from "react";
import Slide from "./Slide";
import styles from '../css/slider.module.css'

const s = {
    onScreen: "left0",
    offScreenRight: "left100vw",
    offScreenLeft: "leftM100vw",
    transition: "transition1l"
};

class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide1: {
                id: 0,
                position: s.onScreen,
                transition: true,
            },
            slide2: {
                id: 1,
                position: s.offScreenRight,
                transition: true,
            }
        };
    }

    componentDidMount() {
        this.startCarousel();
    }

    componentWillUnmount() {
        clearInterval(this.carouselInterval);
    }

    startCarousel = () => {
        this.carouselInterval = setInterval(() => {
            this.transitionSlides();
        }, 4000);
    };

    setSlideState = (slide1, slide2) => {
        this.setState({
            slide1: slide1,
            slide2: slide2
        });
    };

    transitionSlides = () => {
        const { slide1, slide2 } = this.state;
        if (slide1["position"] === s.onScreen) {
            slide1["position"] = s.offScreenLeft;
            slide2["position"] = s.onScreen;
        } else {
            slide1["position"] = s.onScreen;
            slide2["position"] = s.offScreenLeft;
        }
        this.setSlideState(slide1, slide2);
        setTimeout(() => {
            this.resetSlideOffScreen();
        }, 1000);
    };

    resetSlideOffScreen = () => {
        const { slide1, slide2} = this.state;
        const { slides } = this.props;
        if (slide1["position"] === s.offScreenLeft) {
            slide1["transition"] = false;
            slide1["position"] = s.offScreenRight;
            slide1["id"] = slide2.id + 1 === slides.length ? 0 : slide2.id + 1;
        } else {
            slide2["transition"] = false;
            slide2["position"] = s.offScreenRight;
            slide2["id"] = slide1.id + 1 === slides.length ? 0 : slide1.id + 1;
        }
        this.setSlideState(slide1, slide2);
        this.resetSlideTransitions(slide1, slide2);
    };

    resetSlideTransitions = (slide1, slide2) => {
        setTimeout(() => {
            slide1["transition"] = true;
            slide2["transition"] = true;
            this.setSlideState(slide1, slide2);
        }, 500);
    };

    render() {
        const { slide1, slide2} = this.state;
        const { slides } = this.props;
        return (
            <div className={styles.slideshowContainer}>
                <Slide
                    image={slides[slide1.id]}
                    position={slide1.position}
                    transition={slide1.transition ? s.transition : ""}
                    title="Responsive Layout"
                    info="Aenean diam libero, venenatis eu risus eu, tincidunt porttitor orci. Praesent sit amet auctor erat, vitae auctor dolor. Sed viverra nunc magna, quis placerat augue pellentesque quis. Sed nec pellentesque dolor."
                />
                <Slide
                    image={slides[slide2.id]}
                    position={slide2.position}
                    transition={slide2.transition ? s.transition : ""}
                    title="Mobile Friendly"
                    info="Pellentesque luctus ac nunc et hendrerit. Aliquam eu scelerisque eros. Vestibulum scelerisque mi nec augue condimentum rhoncus. Cras fermentum convallis elementum."
                />
            </div>
        );
    }
}

export default Slideshow;
