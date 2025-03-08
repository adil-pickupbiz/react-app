import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterUse from "./componets/addUser/createUser";
import GetUser from "./componets/getUser/getUser";
import UpdateUser from "./componets/updateUsers/updateUser";

const App = () => {
    return (
        <div>
            <h1>Wellcome to react deploye project </h1>
            <Router>
                <Routes>
                    <Route path="/" element={<GetUser />} />
                    <Route path="/register" element={<RegisterUse />} />
                    <Route path="/update/:userId" element={<UpdateUser />} />
                </Routes>
            </Router>
        </div>
        
    );
};

export default App;
