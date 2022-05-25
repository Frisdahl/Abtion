import Logo from '../assets/images/logo-sort.png'

// Styles

export default function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={Logo} height={25} width={35} alt="" />
            </div>

            <nav>
                <ul>
                    <li>Om os</li>
                    <li>Viden</li>
                    <li>Karriere</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
        </header>
    )
}
