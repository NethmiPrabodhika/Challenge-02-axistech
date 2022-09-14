
import axios from "axios";



let FUNDRASINGURL = "https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev/fundraising";

export async function Getfundraising(){
    const config = {
        headers: {
            'accept': 'application/json',
            'x-api-key': 'RHtTMSSIsm4ecSAfaHq4N7HpaMOJBv5utDDhp1ch',
        }
    }
    
    const FundrasingUrlWithPagination = FUNDRASINGURL + "?pagination=1&limit=20";

    return axios.get(FundrasingUrlWithPagination,config)
}


let AMOUNTURL = "https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev/amounts";

export async function Getamount(){
    const config = {
        headers: {
            'accept': 'application/json',
            'x-api-key': 'RHtTMSSIsm4ecSAfaHq4N7HpaMOJBv5utDDhp1ch',
        }
    }
    
    const AmountUrl = AMOUNTURL + "amounts";

    return axios.get(AmountUrl,config)
}