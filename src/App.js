import React from 'react'
import './App.css'
import {connect} from "react-redux";
import {productsRequest, setId, setUnit, setUnitAlt} from "./Redux/products-reducer";
import ProductItem from "./Components/ProductItem";



class App extends React.Component {

    componentDidMount() {
        this.props.productsRequest()
    }

    render() {
        if (!this.props.products.length) {
            return <div>Loading...</div>
        }


        return this.props.products.map(item => <ProductItem key={item.productId}
                                                            title={item.title}
                                                            code={item.code}
                                                            priceRetail={item.priceRetail}
                                                            priceRetailAlt={item.priceRetailAlt}
                                                            priceGold={item.priceGold}
                                                            priceGoldAlt={item.priceGoldAlt}
                                                            productId={item.productId}
                                                            unit={this.props.unit}
                                                            setUnit={this.props.setUnit}
                                                            setUnitAlt={this.props.setUnitAlt}
                                                            id={this.props.id}
                                                            setId={this.props.setId}
                                                            assocProducts={item.assocProducts}
        />);
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productsData.products,
        unit: state.productsData.unit,
        id: state.productsData.id,
    }
}


export default connect(mapStateToProps, {productsRequest, setUnit, setUnitAlt, setId})(App);
