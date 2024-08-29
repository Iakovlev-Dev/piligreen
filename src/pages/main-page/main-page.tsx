import {Link} from "react-router-dom";
import {AppRoute} from "../../const.ts";
import Header from "../../components/header/header.tsx";
import {Helmet} from "react-helmet-async";


export default function MainPage () {
    return (
        <div className="wrapper">
            <Helmet>
                <title>Piligreen</title>
            </Helmet>
            <Header />
            <main >
                <div className="main-page">
                    <div className="main-page-h1">
                        <div className="container">
                            <h1 className="main-h1">Производство деревянной тары</h1>
                        </div>
                    </div>
                    <div className="main-page-production">
                        <div className="container">
                            <div className="main-page-production_content">
                                <button className="main-page-production_button">
                                    <Link to={AppRoute.Contacts} className="main-page-production_link">
                                        Наша продукция
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
