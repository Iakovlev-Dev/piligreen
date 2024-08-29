export default function  Address () {
    return (
        <div className="address">
            <address className="mb-4">
                {/*<div className="address-title">*/}
                {/*    <h2 className="address-title_h2">*/}
                {/*        Контакты*/}
                {/*        <span> "Пилигрин" </span>*/}
                {/*    </h2>*/}
                {/*</div>*/}
                <div className="address-factory">
                    <p className="address_p">Адрес производства:</p>
                    <ul className="address-list">
                        <li className="address-list_item">
                            Ленинградская область, Гатчинский район, <br /> г. Коммунар, Станционная улица, д.40
                        </li>
                        <li className="address-list_item"> Координаты: 59.649697, 30.427780</li>
                    </ul>
                </div>
                <div className="address-timetable-office">
                    <p className="address_p">Режим работы отдела продаж:</p>
                    <ul className="address-list">
                        <li className="address-list_item">пн-пт: 8:00 - 16:45</li>
                    </ul>
                </div>
                <div className="address-timetable-store">
                    <p className="address_p">Режим работы склада:</p>
                    <ul className="address-list">
                        <li className="address-list_item">пн-сб: 8:00 - 19:00</li>
                        <li className="address-list_item">обед: 12.30 - 13.00</li>
                    </ul>
                </div>
                <div className="address-contacts">
                <p className="address_p">Связаться с нами:</p>
                    <ul className="address-list">
                        <li className="address-list_item">Тел./Факс: +7 (911) 295-47-20</li>
                        <li className="address-list_item">e-mail: piligreen@bk.ru</li>
                    </ul>
                </div>
            </address>
        </div>

    )
}
