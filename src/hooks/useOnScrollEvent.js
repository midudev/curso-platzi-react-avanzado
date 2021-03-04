import { useState, useEffect } from 'react';

export const useOnScrollEvent = (limit, scroll_case) => {
    const [showFixed, setShowFixed] = useState(false);
    useEffect(() => {
        const onScroll = e => {
            let newShowFixed = null;
            switch (scroll_case) {
                case 'scrollY':
                    newShowFixed = window.scrollY > limit
                    break;
                case 'scrollX':
                    newShowFixed = window.scrollX > limit
                    break;
                default:
                    break;
            }
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        document.addEventListener('scroll', onScroll)
        return () => document.removeEventListener('scroll', onScroll) //Clean effect
    }, [showFixed]);
    return [showFixed]
}