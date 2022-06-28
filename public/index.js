const SPA = () => {
    return (
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{users:[{name:"peter", email:"peter@mit.edu"}]}}>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/account" element={<CreateAccount/>}/>
                    <Route path="/data" element={<AllData/>}/>
                </Routes>
            </UserContext.Provider>    
        </HashRouter>
    );
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(SPA));