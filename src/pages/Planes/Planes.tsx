// @ts-nocheck
import { Card } from "../../shared/ui/Card/Card"
import { Page } from "../../components/Page/Page"
import style from "./style.module.css"
import { useTonWallet } from "../../app/tonconnect/useTonConnect"
import { useTonConnectUI } from "../../app/tonconnect/useTonConnectUI"

export const PlanesPage = () => {
    const [tonconnetcUI] = useTonConnectUI()
    console.log(tonconnetcUI())
    
    const transaction = {
        validUntil: Date.now() + 1000000,
        messages: [
            {
                address: "0:412410771DA82CBA306A55FA9E0D43C9D245E38133CB58F1457DFB8D5CD8892F",
                amount: "20000000",
                stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
            },
            {
                address: "0:E69F10CC84877ABF539F83F879291E5CA169451BA7BCE91A37A5CED3AB8080D3",
                amount: "60000000",
                payload: "base64bocblahblahblah==" // just for instance. Replace with your transaction payload or remove
            }
        ]
    }
    
  
    
    return (
        <Page>
            <div class={style.container}>
                <Card 
 class={style.card}
                color="blue"
                title="Basic"
                actions={
        <button onClick={() => tonconnetcUI().sendTransaction({})}>
            Send
        </button>                
                }
                />
                <Card
                 class={style.card}
                color="orange"
                title="Premium"
                />
            </div>
        </Page>
    )
}