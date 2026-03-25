const linkClickHandler = (e, targetId) => {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
        target.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        }
    }

export default linkClickHandler