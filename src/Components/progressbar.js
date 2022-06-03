import { useState } from 'react'

export default function Progress() {
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
                <li className={`${activeItem >= 0 ? 'green' : ''}`}>
                    <div className="icon-wrap"></div>
                    <span className="progress-text">Applied</span>
                </li>

                <li className={`${activeItem >= 2 ? 'green' : ''}`}>
                    <div className="icon-wrap"></div>
                    <span className="progress-text">Received</span>
                </li>

                <li className={`${activeItem >= 3 ? 'green' : ''}`}>
                    <div className="icon-wrap"></div>
                    <span className="progress-text2">Read and processed</span>
                </li>

                <li className={`progress-4 ${activeItem >= 4 ? 'green' : ''}`}>
                    <div className="icon-wrap2"></div>
                    <span className="progress-text3">Answered!</span>
                </li>
            </ol>
        </div>
    )
}
