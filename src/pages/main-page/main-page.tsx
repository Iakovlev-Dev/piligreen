import NavbarMenu from "../../components/navbar/navbar.tsx";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.ts";


export default function MainPage () {
    return (
        <div className="wrapper">
            <div className="main-page-img">
                <header className="main-page-header">
                    <NavbarMenu />
                </header>
                <main className="main-page">

                    <div className="main-page-h1">
                        <div className="container">
                            <h1 className="main-h1">Производство деревянной тары</h1>
                        </div>
                        {/*<div className="main-page-shadow"/>*/}
                    </div>
                    <div className="main-page-production">
                        <div className="container">
                            <div className="main-page-production_content">
                                <button className="main-page-production_button">
                                    <Link to={AppRoute.Contacts} className="main-page-production_link">Наша продукция</Link>
                                </button>
                            </div>

                        </div>
                    </div>


                </main>
            </div>

        </div>
    )
}
