import React from "react";
import "./automaticSlider.css"
import partner1 from "../../Images/autosliderImg1.png";
import partner2 from "../../Images/autosliderimg2.png";







const imgs = [partner1,partner2];
const delay = 3000;

function AutomaticSlider() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {imgs.map((e, index) => (
                    <div className="slide" key={index}>
                        <img className="proba" src={e} alt="img1" />
                        {/* <img className="proba" src={partner2} alt="img1" /> */}
                    </div>
                ))}
            </div>

            {/* <div className="slideshowDots">
                {imgs.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div> */}
        </div>
    );
}

export default AutomaticSlider;