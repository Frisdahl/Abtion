import { useState } from 'react'

export function Progress() {
    const [activeItem, setActiveItem] = useState(0)
    const decrementItem = () => {
        setActiveItem(activeItem - 1)
    }
    const incrementItem = () => {
        setActiveItem(activeItem + 1)
    }
    return (
        <div>
            <ol id="prog" className="progress-track">
                <li className={`${activeItem >= 1 ? 'green' : ''}`}>
                    <div className="icon-wrap"></div>
                    <span className="progress-text">The position</span>
                </li>

                <li className={`${activeItem >= 2 ? 'green' : ''}`}>
                    <div className="icon-wrap"></div>
                    <span className="progress-text">Qualifications</span>
                </li>

                <li className={`${activeItem >= 3 ? 'green' : ''}`}>
                    <div className="icon-wrap"></div>
                    <span className="progress-text2">
                        Abtion as a workplace
                    </span>
                </li>

                <li className={`progress-4 ${activeItem >= 4 ? 'green' : ''}`}>
                    <div className="icon-wrap2"></div>
                    <span className="progress-text3">Apply</span>
                </li>
            </ol>
            <button onClick={decrementItem}>prev</button>
            <button onClick={incrementItem}>next</button>
        </div>
    )
}
