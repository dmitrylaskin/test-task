import React, {useState} from 'react';
import productImg from "../images/df126-52f2-11e5-b9a9-00259036a192_220x220_1.jpg";

const ProductItem = (props) => {

    let [counter, setCounter] = useState(1)

    const handleClickUp = () => {
        setCounter(counter + 1)
    }
    const handleClickDown = () => {
        if (counter === 0) return
        setCounter(counter - 1)
    }

    const handleUnitSelect = () => {
        props.setUnit()
        props.setId(props.productId)
    }
    const handleAltUnitSelect = () => {
        props.setUnitAlt()
        props.setId(props.productId)
    }

    return (
        <div>
            <main className="grid container">
                <div className="sub_category_page">
                    <div className="column_right column_right_products_container">
                        <div className="product__area">

                            <div id="products_section">
                                <div className="products_page pg_0">
                                    <div className="product product_horizontal">
                                        <span className="product_code">{`Код: ${parseInt(props.code)}`}</span>
                                        <div className="product_status_tooltip_container">
                                            <span className="product_status">Наличие</span>
                                        </div>
                                        <div className="product_photo">
                                            <a href="#" className="url--link product__link">
                                                <img src={productImg} alt={'product-img'}/></a>
                                        </div>
                                        <div className="product_description">
                                            <a href="#" className="product__link">{props.title}</a>
                                        </div>
                                        <div className="product_tags hidden-sm">
                                            <p>Могут понадобиться:</p>
                                            <a href="#" className="url--link">подложка,</a>
                                            <a href="#" className="url--link">плинтус натуральный,</a>
                                            <a href="#" className="url--link">рулетка,</a>
                                            <a href="#" className="url--link">набор для укладки ламината,</a>
                                            <a href="#" className="url--link">ножовка по ламинату,</a>
                                            <a href="#" className="url--link">гель для стыков ламината Clic
                                                Protect.</a>
                                        </div>
                                        <div className="product_units">
                                            <div className="unit--wrapper">
                                                <div className={`unit--select ${props.unit === 'package' && props.id === props.productId ? 'unit--active' : ''}`} onClick={handleUnitSelect}>
                                                    <p className="ng-binding">За м. кв.</p>
                                                </div>
                                                <div className={`unit--select ${props.unit === 'area' && props.id === props.productId ? 'unit--active' : ''}`} onClick={handleAltUnitSelect}>
                                                    <p className="ng-binding">За упаковку</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="product_price_club_card">
                                            <span className="product_price_club_card_text">По карте клуба</span>
                                            <span className="goldPrice">{props.unit === 'package' && props.id === props.productId ? props.priceGold : Math.round(props.priceGoldAlt)}</span>
                                            <span className="rouble__i black__i">
                                        <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0"
                                             width="30px" height="22px" viewBox="0 0 50 50"
                                             enableBackground="new 0 0 50 50" xmlSpace="preserve">
                                           <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="#rouble_black"></use>
                                        </svg>
                                     </span>
                                        </p>
                                        <p className="product_price_default">
                                            <span className="retailPrice">{props.unit === 'package' && props.id === props.productId ? props.priceRetail : Math.round(props.priceRetailAlt)}</span>
                                            <span className="rouble__i black__i">
                                        <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0"
                                             width="30px" height="22px" viewBox="0 0 50 50"
                                             enableBackground="new 0 0 50 50" xmlSpace="preserve">
                                           <use xmlnsXlink="http://www.w3.org/1999/xlink"
                                                xlinkHref="#rouble_gray"></use>
                                        </svg>
                                     </span>
                                        </p>
                                        <div className="product_price_points">
                                            <p className="ng-binding">Можно купить за 231,75 балла</p>
                                        </div>
                                        <div className="list--unit-padd"></div>
                                        <div className="list--unit-desc">
                                            <div className="unit--info">
                                                <div className="unit--desc-i"></div>
                                                <div className="unit--desc-t">
                                                    <p>
                                                        <span className="ng-binding">Продается упаковками:</span>
                                                        <span
                                                            className="unit--infoInn">1 упак. = 2.47 м. кв. </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__wrapper">
                                            <div className="product_count_wrapper">
                                                <div className="stepper">
                                                    <input className="product__count stepper-input" type="text"
                                                           value={counter}/>
                                                    <span className="stepper-arrow up" onClick={handleClickUp}>up</span>
                                                    <span className="stepper-arrow down" onClick={handleClickDown}>down</span>
                                                </div>
                                            </div>
                                            <span className="btn btn_cart" data-url="/cart/"
                                                  data-product-id={props.productId}>
                                        <svg className="ic ic_cart">
                                           <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#cart"></use>
                                        </svg>
                                        <span className="ng-binding">В корзину</span>
                                    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <svg viewBox="0 0 497 415" xmlns="http://www.w3.org/2000/svg" display="none">
                <symbol id="rouble_black">
                    <path fill="#010101"
                          d="M44.431,6.112c-1.719-2.395-4.211-4.125-7.055-4.899c-3.884-0.647-7.824-0.894-11.759-0.735H9.743v22.194H3.031v8.329h6.712v4.556H3.031v8.329h6.712v5.683h9.799v-5.634h14.698v-8.329H19.542v-4.507h6.467c3.427,0.083,6.854-0.147,10.24-0.686c1.764-0.451,3.427-1.232,4.899-2.303c1.763-1.273,3.192-2.954,4.165-4.899c1.155-2.36,1.711-4.968,1.617-7.594C47.17,12.259,46.291,8.917,44.431,6.112z M35.955,19.585c-0.757,1.1-1.835,1.938-3.087,2.401c-2.557,0.664-5.201,0.928-7.839,0.784h-5.487V8.855h4.899c2.373-0.064,4.748,0.051,7.104,0.343c1.528,0.25,2.927,1.01,3.969,2.156c1.068,1.215,1.629,2.793,1.568,4.409C37.112,17.123,36.718,18.459,35.955,19.585L35.955,19.585z"></path>
                </symbol>
                <symbol id="rouble_gray">
                    <path fill="#a7a7a7 "
                          d="M28.109,29.658c5.173,0.578,10.357-0.979,14.355-4.312c4.172-4.748,5.151-11.509,2.499-17.246c-0.847-1.953-2.2-3.644-3.92-4.899c-1.813-1.204-3.872-1.991-6.026-2.303c-2.464-0.37-4.955-0.534-7.447-0.49H9.05v23.272H3.562v5.781H9.05v5.977H3.562v5.781H9.05v8.378h6.467v-8.133h20.088v-5.781H15.517v-6.026H28.06H28.109z M15.566,6.386h12.543c2.019-0.074,4.04,0.074,6.026,0.441c1.673,0.442,3.132,1.467,4.116,2.891c1.062,1.539,1.611,3.373,1.568,5.242c0.138,2.473-0.832,4.879-2.646,6.565c-2.601,1.812-5.76,2.645-8.917,2.352H15.517V6.386H15.566z"></path>
                </symbol>
                <symbol id="cart">
                    <path
                        d="m14.571 16.381c.571 0 .952.381.952.952 0 .571-.381.952-.952.952-.571 0-.952-.381-.952-.952 0-.571.476-.952.952-.952m0-.952c-1.048 0-1.905.857-1.905 1.905 0 1.048.857 1.905 1.905 1.905 1.048 0 1.905-.857 1.905-1.905 0-1.048-.857-1.905-1.905-1.905"></path>
                    <path
                        d="m7.905 16.381c.571 0 .952.381.952.952 0 .571-.381.952-.952.952-.571 0-.952-.381-.952-.952 0-.571.476-.952.952-.952m0-.952c-1.048 0-1.905.857-1.905 1.905 0 1.048.857 1.905 1.905 1.905 1.048 0 1.905-.857 1.905-1.905 0-1.048-.857-1.905-1.905-1.905"></path>
                    <path
                        d="m16.476 14.476h-10.857l-.095-.381c0-.095-1.429-9.714-1.905-11.524-.381-1.524-3.333-1.429-3.333-1.429v-.952c.095 0 3.714-.286 4.286 2.19.381 1.714 1.619 9.333 1.81 11.143h10.1v.952"></path>
                    <path d="m4.095 3.048h15.238v.952h-15.238z"></path>
                    <path d="m5.05 10.667h12.381v.952h-12.381z"></path>
                    <path d="m16.476 11.619h.952l1.905-8.571h-.952l-1.905 8.571"></path>
                </symbol>
            </svg>

        </div>
    );
};

export default ProductItem;
