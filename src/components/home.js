/* eslint-disable jsx-a11y/aria-props */
import 'bootstrap-icons/font/bootstrap-icons.css';
import AddTransaction from "./add";
import DisplayTransaction from "./displayTransaction";
//import { getAuth, signOut } from "firebase/auth"
//import { auth } from "../config/firebase"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// eslint-disable-next-line no-unused-vars
//import CurrencyConvert from './Currency';
import { useDispatch } from "react-redux";
import { signingOut } from "../authReducer/auth";
//import TotalBalance from "../totalBalance";


function Home(props) {
    const history = useHistory();
    const dispatch = useDispatch();


    const logOut = () => {
        const isLoggedOut = dispatch(signingOut());
        if (isLoggedOut) {
            history.push('/')
        } else {

        }

    };
    return (
        <div>
            <i
                onClick={logOut}
                className="bi bi-box-arror-in-right"
                style={{ float: "right", fontSize: "40px" }}
            >
                {" "}
            </i>
            <div className="container">
                <div className="mt-5">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active"
                                id="home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#home"
                                type="button"
                                role="tab"
                                aria-control="home"
                                aria-selected="true"
                            >
                                Expense tracker
                            </button>
                        </li>
                        <i class="nav-item" role="presentation">
                            <button class="nav-link"
                                id="profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#home"
                                type="button"
                                role="tab"
                                aria-control="profile"
                                aria-selected="false"
                            >
                                Currency Converter
                            </button>
                        </i>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div
                            class="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            arial-aria-labelledby="home-tab"
                        >

                            <DisplayTransaction transactions={props.transactions} />
                            <AddTransaction add={props.add} />
                        </div>
                        <div
                            class="tab-pane fade"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"


                        >
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home