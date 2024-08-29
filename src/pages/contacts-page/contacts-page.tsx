import {Helmet} from "react-helmet-async";
import Header from "../../components/header/header.tsx";
import Address from "../../components/adress/adress.tsx";

export default function ContactsPage () {
    return (
        <>
            <Helmet>
                <title>Piligreen. Contacts</title>
            </Helmet>
            <Header />
            <main>
                <div className="contact-page">
                    <div className="container">
                        <div className="contact-page-h1">
                            <h1 className="contact-h1">
                                Контакты
                            </h1>
                        </div>
                        <div className="contact-page-info">
                            <div className="contact-info_address">
                                <Address />
                                <div className="contact-logo">
                                    <img className="contact-logo_img" src="../../../public/img/logo_big.png" alt="logo" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </>

    )
}
