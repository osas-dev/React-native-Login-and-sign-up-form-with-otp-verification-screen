export const bottomSheetControl = ({ animation, ref, visible }) => {
    const isActive = ref?.current?.isActive()
    // if (isActive && visible) {
    //     animation.current.pause();
    //     ref?.current?.scrollTo(0)
    // }
    // else {
    //     ref?.current?.scrollTo(-300)
    //     setTimeout(() => {
    //         animation.current.play();
    //     }, 300);
    // }
    if (visible) {
        ref?.current?.scrollTo(-300)
        setTimeout(() => {
            animation.current.play();
        }, 300);
    } else{
        animation.current.pause();
        ref?.current?.scrollTo(0)
    }
}