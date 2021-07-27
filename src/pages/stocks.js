import React from "react"

const Stocks = (props) => {
    const apiKey = "f3ce88ac13fe90fff432b41385ab84c1";
    const symbol = props.match.params.symbol;
    const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`

    const [stock, setStock] = React.useState(null);

    const getStock = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setStock(data);
    };
    

    React.useEffect(() => {
        getStock();
    }, []);

    const loaded = () => {
        return (
            <div>
                <h3>Name: {stock[0].companyName} </h3>
                <h3 className="price">Price: {stock[0].price} </h3>
            </div>
        );
    };

    const loading = () => {
        return <h1>Loading ...</h1>
    };

    return stock ? loaded() : loading();
    
}

export default Stocks 