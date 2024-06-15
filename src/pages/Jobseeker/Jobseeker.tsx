//@ts-nocheck
import { Button } from "../../shared/ui/Button/Button"
import { Page } from "../../components/Page/Page"
import { TonConnectButton } from "../../app/tonconnect/TonConnectUIButton"
import { useMainButton } from "@tma.js/sdk-solid"


export const JobseekerPage = () => {
    
    const mainButton = useMainButton()
    return(
        <Page  >
            <div>
            <TonConnectButton/>
            <div class="flex-col">
            <Button link href="/offered" icon={<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 9.21622V17.9459C1 19.0804 1.89543 20 3 20H18C19.1046 20 20 19.0804 20 17.9459V9.21622M1 9.21622V6.64865C1 5.51423 1.89543 4.59459 3 4.59459H6.5M1 9.21622H20M20 9.21622V6.64865C20 5.51423 19.1046 4.59459 18 4.59459H14.5M6.5 4.59459V3.05405C6.5 1.91963 7.39543 1 8.5 1H12.5C13.6046 1 14.5 1.91963 14.5 3.05405V4.59459M6.5 4.59459H14.5" stroke="inherit" stroke-width="1.5"/>
</svg>
} label="Offered" />
<Button icon={<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.53379 14.014L4.67934 18.9738C4.67934 19.4869 4.67934 20 5.53379 20C5.83874 20 9.63513 17.7766 9.9769 17.6056C10.7972 17.1951 11.6858 17.4346 12.0276 17.6056C12.3694 17.7766 16.1657 20 16.4707 20C17.3251 20 17.3251 19.4869 17.3251 18.9738L16.4707 14.014C16.4707 13.8429 16.2998 13.3299 16.8125 12.8168L20.572 9.05412C20.9708 8.59804 21.4265 7.85692 20.2302 7.68589L14.7572 6.83074C14.0737 6.65971 13.7319 5.97559 13.561 5.63354L11.6812 1.52883C11.1344 0.571067 10.542 1.12976 10.3141 1.52883L8.26354 5.63354C8.09256 5.97559 7.92167 6.65971 7.23812 6.83074L1.76975 7.68589C0.573531 7.85692 1.02923 8.59804 1.42798 9.05412L5.18754 12.8168C5.7002 13.3299 5.53379 13.8429 5.53379 14.014Z" stroke="inherit" stroke-width="1.5"/>
</svg>
} label="Applied" link href="/applied"/>
</div>
<Button  label="Settings"/>
</div>
        </Page>
    )
}