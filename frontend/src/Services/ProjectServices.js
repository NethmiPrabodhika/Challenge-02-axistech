
import axios from "axios";


//____________get fundrising____________________

let FUNDRASINGURL = "https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev/fundraising";

export async function Getfundraising() {
    const config = {
        headers: {
            'accept': 'application/json',
            'x-api-key': 'RHtTMSSIsm4ecSAfaHq4N7HpaMOJBv5utDDhp1ch',
        }
    }

    const FundrasingUrlWithPagination = FUNDRASINGURL + "?pagination=1&limit=20";

    return axios.get(FundrasingUrlWithPagination, config)
}




//______________create a amount___________

let NEWAMOUNTURL = "https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev/donate";

export async function createAmount(data) {
    const alldata = {
        fundraisingItemId: data?.fundraisingItemId,
        amount: data?.amount,
    }
    
    const config = {
        headers: {
            'accept': 'application/json',
            'x-api-key': 'RHtTMSSIsm4ecSAfaHq4N7HpaMOJBv5utDDhp1ch',
        }
    }

    return axios.post(NEWAMOUNTURL, config , alldata )

}



//___________get amounts___________________

let AMOUNTURL = "https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev/amounts";

export async function Getamount() {
    const config = {
        headers: {
            'accept': 'application/json',
            'x-api-key': 'RHtTMSSIsm4ecSAfaHq4N7HpaMOJBv5utDDhp1ch',
        }
    }

    return axios.get(AMOUNTURL, config)
}
