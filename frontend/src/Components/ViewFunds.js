import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardIcon,
    CardFieldset,
    CardInput,
    CardOptionsItem,
    CardOptions,
    CardOptionsNote,
    CardButton,
    CardLink,

} from "./Card";
import { Getfundraising } from "../Services/DonateService";
import { CardImg } from "reactstrap";
import "../css/style.css";


function ViewFunds() {

    const [Dataset, setDataset] = useState([]);
    const [ShowDataArray, setShowDataArray] = useState([]);
    const [ShowData, setShowData] = useState(false);

    const getAllData = async () => {
        try {
            const response = await Getfundraising();
            let array = [];
            setDataset(response?.data?.data);
            for (var i = 0; i < response?.data?.data.length; i++) {
                array.push({ key: i, status: false });
            }
            setShowDataArray(array);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllData();
    }, [])


    return (
        <div>

            <div className="card" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {Dataset.map((item, index) => {
                    return (
                        <div class="card-view" style={{
                        }}>
                            <div>
                                <CardWrapper style={{ display: ShowDataArray[index].key == index && ShowDataArray[index].status ? "none" : "flex" }}>
                                    <CardBody>

                                        <CardFieldset>

                                            <CardImg
                                                width="100%"
                                                height="100%"
                                                src={item.urls.small}
                                                alt="User Img"

                                            />
                                            <CardFieldset>
                                                <CardOptionsNote>
                                                    <CardHeader >
                                                        <CardHeading>{item.title}</CardHeading>
                                                    </CardHeader>
                                                </CardOptionsNote>
                                                <CardOptionsNote><b>{item.target_amount}</b></CardOptionsNote>
                                            </CardFieldset>

                                        </CardFieldset>

                                        <CardFieldset>
                                            <CardButton type="button"
                                                onClick={() => {
                                                    ShowDataArray.map((item, i) => {
                                                        if (item.key == index) {
                                                            console.log("Selected", item.key, index, item.status)
                                                            item.status = true;
                                                        }
                                                    })
                                                    console.log("Selected", ShowDataArray[index].key, index, ShowDataArray[index].status)
                                                    console.log(ShowDataArray);
                                                    setShowData(true);
                                                }}
                                            >
                                                Donate Now
                                            </CardButton>
                                        </CardFieldset>

                                    </CardBody>
                                </CardWrapper>
                            </div>


                            <div style={{ display: ShowDataArray[index].key == index && ShowDataArray[index].status ? "flex" : "none" }}>
                                <CardWrapper >
                                    <CardHeader>
                                        <CardHeading>{item.title}</CardHeading>
                                    </CardHeader>

                                    <CardBody >

                                        <CardFieldset>
                                            <CardFieldset>
                                                <CardOptionsNote><b>target Amount : {item.target_amount}</b></CardOptionsNote>
                                                <CardOptionsNote><b><input type="radio" value="Male" name="gender" /> $10</b></CardOptionsNote>
                                                <CardOptionsNote><b><input type="radio" value="Male" name="gender" /> $20</b></CardOptionsNote>
                                                <CardOptionsNote><b><input type="radio" value="Male" name="gender" /> $30</b></CardOptionsNote>
                                                <CardOptionsNote><b><input type="radio" value="Male" name="gender" /> $40</b></CardOptionsNote>
                                                <CardOptionsNote><b><input type="radio" value="Male" name="gender" /> $50</b></CardOptionsNote>
                                            </CardFieldset>

                                        </CardFieldset>

                                        <CardFieldset>
                                            <CardButton className="donate-button" type="button" style={{backgroundColor:'#F8C16F'}}
                                                onClick={() => {
                                                    alert("You have successfully made the donation")
                                                    ShowDataArray.map((item, i) => {
                                                        if (item.key == index) {
                                                            console.log("Selected", item.key, index, item.status)
                                                            item.status = false;
                                                        }
                                                    })
                                                    console.log("Selected", ShowDataArray[index].key, index, ShowDataArray[index].status)
                                                    console.log(ShowDataArray);
                                                    setShowData(false);
                                                }}
                                            >
                                                Pay Now
                                            </CardButton>
                                        </CardFieldset>

                                    </CardBody>
                                </CardWrapper>
                            </div>


                        </div>

                    )
                })}

            </div>
        </div>
    );
}

export default ViewFunds;
