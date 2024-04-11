import $ from "jquery";

export function enableDragScroll() {
    let isDragging: boolean = false;
    let startX: number = 0;
    let scrollLeft: number = 0;
    let animationFrameId: number | null = null;
    const $gridContainer: JQuery<HTMLElement> = $('.grid-container');

    $gridContainer.on('mousedown', function (event) {
        isDragging = true;
        startX = event.pageX - $gridContainer.offset().left;
        scrollLeft = $gridContainer.scrollLeft();
        animationFrameId = requestAnimationFrame(scrollUpdate);
    });

    $(document).on('mouseup', function () {
        isDragging = false;
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    });

    $(document).on('mousemove', function (event) {
        if (isDragging) {
            const mouseX: number = event.pageX - $gridContainer.offset().left;
            const moveX: number = mouseX - startX;
            $gridContainer.scrollLeft(scrollLeft - moveX);
            if (!animationFrameId) {
                animationFrameId = requestAnimationFrame(scrollUpdate);
            }
        }
    });

    $(document).on('wheel', function (event) {
        if (event.shiftKey) {
            event.preventDefault();
            const wheelEvent = event.originalEvent as WheelEvent;
            const delta: number = wheelEvent.deltaY;
            $gridContainer.scrollLeft($gridContainer.scrollLeft() + delta);
            if (!animationFrameId) {
                animationFrameId = requestAnimationFrame(scrollUpdate);
            }
        }
    });

    function scrollUpdate() {
        animationFrameId = null;
        if (isDragging) {
            animationFrameId = requestAnimationFrame(scrollUpdate);
        }
    }
}
