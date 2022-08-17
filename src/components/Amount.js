import "../css/App.css";
import {useContext} from 'react';
import whewheContext from "../context/WheWheContext";

const Amount = ()=> {
    const {total, setTotalValue} = useContext(whewheContext)

    const amountSelected = (number)=>{
        let totalValue = total + number;
        setTotalValue(totalValue)
    }

    return(
        <div className="amount">
            <div className="buttons">
                <button onClick={()=>{amountSelected(1)}}>$1</button>
                <button onClick={()=>{amountSelected(5)}}>$5</button>
                <button onClick={()=>{amountSelected(10)}}>$10</button>
                <button onClick={()=>{amountSelected(20)}}>$20</button>
                </div>
            </div>
    )

}

export default Amount;