import React from "react";
import "./aaaa.css";

function Apaaaa(){
    const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Slideshow() {
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
    prevIndex === colors.length - 1 ? 0 : prevIndex + 1),

    delay);


    return () => {
      resetTimeout();
    };
  }, [index]);

  return /*#__PURE__*/(
    React.createElement("div", { className: "slideshow" }, /*#__PURE__*/
    React.createElement("div", {
      className: "slideshowSlider",
      style: { transform: `translate3d(${-index * 100}%, 0, 0)` } },

    colors.map((backgroundColor, index) => /*#__PURE__*/
    React.createElement("div", {
      className: "slide",
      key: index,
      style: { backgroundColor } }))), /*#__PURE__*/




    React.createElement("div", { className: "slideshowDots" },
    colors.map((_, idx) => /*#__PURE__*/
    React.createElement("div", {
      key: idx,
      className: `slideshowDot${index === idx ? " active" : ""}`,
      onClick: () => {
        setIndex(idx);
      } })))));





}
    return(
        <div>

        </div>
    )
}
export default Apaaaa;