import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        });
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            {showScrollTopButton && (
                <FaAngleDoubleUp
                    className="top-btn-position top-btn-style"
                    onClick={scrollTop}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            scrollTop();
                        }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="Scroll to top"
                />
            )}
        </div>
    );
};

export default ScrollToTop;