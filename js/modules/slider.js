export default function slider(slider_, slider_Wrapper, slider_Inner, slider_Item, left_, right_) {
    const callElem = className => document.querySelector(className);
    const callElems = className => document.querySelectorAll(className);
    const slider = callElem(slider_);
    const sliderWrapper = callElem(slider_Wrapper);
    const sliderInner = callElem(slider_Inner);
    const sliderItem = callElems(slider_Item);
    const prev = callElem(left_);
    const next = callElem(right_);
    const width = sliderItem[0].offsetWidth;
    console.log(sliderItem)

    let offset = 0;

    init();

    function init() {
        sliderInner.style.width = width * sliderItem.length + "px";
        console.log(width * sliderItem.length + "px")

    }

    next.addEventListener("click", e => {
        if (offset == width * (sliderItem.length - 1)) {
            offset = 0;
        } else {
            offset += width;
        }
        sliderInner.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener("click", e => {
        if (offset == 0) {
            offset = width * (sliderItem.length - 1);
        } else {
            offset -= width;
        }

        sliderInner.style.transform = `translateX(-${offset}px)`;
    });
}