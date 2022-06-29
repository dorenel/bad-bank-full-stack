const SPA = () => {
    return (
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{currentUser: ""}}>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/account" element={<CreateAccount/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/deposit" element={<Deposit/>}/>
                    <Route path="/withdraw" element={<Withdraw/>}/>
                    <Route path="/balance" element={<Balance/>}/>
                    <Route path="/data" element={<AllData/>}/>
                </Routes>
            </UserContext.Provider>    
        </HashRouter>
    );
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(SPA));