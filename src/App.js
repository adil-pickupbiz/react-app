import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterUse from "./componets/addUser/createUser";
import GetUser from "./componets/getUser/getUser";
import UpdateUser from "./componets/updateUsers/updateUser";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GetUser />} />
                <Route path="/register" element={<RegisterUse />} />
                <Route path="/update/:userId" element={<UpdateUser />} />
            </Routes>
        </Router>
    );
};

export default App;
