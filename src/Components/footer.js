const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-row-1">
                    <h2 id="h2-footer">
                        Værdifulde indsigter <br /> og spændende artikler
                    </h2>
                    <button className="btn-newsletter">
                        Tilmeld nyhedsbrev
                    </button>
                </div>

                <div className="divider"></div>

                <div className="footer-row-2">
                    <div className="column-1">
                        <h3 id="h3-contact">
                            Skal vi holde <br /> kontakten?
                        </h3>
                        <p>+45 70 60 70</p>
                        <p>hello@abtion.com</p>
                    </div>

                    <div className="column-2">
                        <h4 className="footer-margin">Adresser</h4>
                        <p>
                            København <br /> Vesterbrogade 15 <br /> 31620
                            København
                        </p>
                        <p id="odense">
                            odense <br /> Sverigesgade 18 <br /> 5000 Odense C
                        </p>
                    </div>
                    <div className="column-3">
                        <h4 className="footer-margin">Links</h4>
                        <p>
                            Cases <br /> Om os <br /> Viden <br /> karriere{' '}
                            <br /> Kontakt
                        </p>
                    </div>
                    <div className="column-4">
                        <h4 className="footer-margin">Følg med</h4>
                        <p>
                            Linkedin <br /> Facebook <br /> Instagram
                        </p>
                    </div>
                </div>

                <div className="divider"></div>
            </div>
        </footer>
    )
}

export default Footer
