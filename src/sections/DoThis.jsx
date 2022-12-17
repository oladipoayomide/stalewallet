import ThingsTemp from "../utils/ThingsTemp";

const DoThis = () => {
    return ( 
        <div className="container">
            <ThingsTemp
                title="Deposit and Withdraw in just few clicks !"
                body="A click on the deposit or withdraw icons on the homepage will lead you to all your crypto assets, then you can select the crypto you want to deposit and withdraw."
                path="/img/person-phone.svg"
            />
            <ThingsTemp
                title="Swap your crypto. Anytime, Anyday"
                body="You can swap your crypto anytime ,anyday with little or no exchange fee. In just few clicks you can swap your cryptocurrencies."
                path="/img/boy-girl-btc.svg"
                direction="flex-row-reverse"
            />
            <ThingsTemp
                title="Convert your Gifts cards to Crypto Instantly"
                body="Load your American express cards, Walmart visa cards to cryptocurrency instantly in just few clicks at affordable rates."
                path="/img/girl-giftcard.svg"
                
            />
            <ThingsTemp
                title="Use ZendWallet to make USD Payment to Customers"
                path="/img/phone-circle.svg"
                
            />

        </div>
     );
}
 
export default DoThis;