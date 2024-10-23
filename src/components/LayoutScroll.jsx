import React, { useCallback, useEffect, useRef } from "react";
import SimpleBar from "simplebar-react";

function LayoutScroll({ children, getData }) {
  const scrollBarRef = useRef(null);

  const handleScroll = useCallback(
    (event) => {
      const { scrollHeight, scrollTop, clientHeight } = event.target;
      const isBottomReached =
        scrollHeight - Math.round(scrollTop) === clientHeight;

      if (isBottomReached) {
        getData && getData();
      }
    },
    [getData],
  );

  useEffect(() => {
    if (scrollBarRef.current) {
      const scrollableElement = scrollBarRef.current.contentWrapperEl;
      scrollableElement.addEventListener("scroll", handleScroll);

      // Cleanup function to remove the listener on unmount
      return () =>
        scrollableElement.removeEventListener("scroll", handleScroll);
    }
  }, [scrollBarRef, handleScroll]);
  return (
    <SimpleBar
      style={{ maxHeight: "88vh", overflowX: "hidden", maxWidth:"90vw" }}
      autoHide={false}
      ref={scrollBarRef}
    >
      <div className="body-wrapper">
        <div className="container-fluid">{children}</div>
      </div>
    </SimpleBar>
  );
}

export default LayoutScroll;
