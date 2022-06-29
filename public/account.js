const CreateAccount = () => {
    const [showForm, setShowForm] = React.useState(true);

    return (
        <>
        <Card 
            bgColor="primary" 
            header="Create Account"
            body={showForm ? <AccountForm setShowForm={setShowForm}/> : <AccountStatus setShowForm={setShowForm}/>}/>
        </>
    );
};

const AccountForm = ({setShowForm}) => {

    //const ctx = React.useContext(UserContext);

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleAccountCreate = () => {
        //ctx.users.push({"name": name, "email": email, "password": password});
        const url = `/account/create/${name}/${email}/${password}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data));
        setShowForm(false);
    };
    
    return (
        <>
        <div className="mb-3">
            <label htmlFor="account-name" className="form-label">Name</label>
            <input type="text" className="form-control" id="account-name" placeholder="Name" onChange={e => setName(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="account-email" className="form-label">Email</label>
            <input type="email" className="form-control" id="account-email" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="account-password" className="form-label">Password</label>
            <input type="password" className="form-control" id="account-password" placeholder="" onChange={e => setPassword(e.target.value)}/>
        </div>
        <button type="button" className="btn btn-light" onClick={handleAccountCreate}>Create Account</button>
        </>
    );
};

const AccountStatus = ({setShowForm}) => {

    const handleAccountReset = () => {
        setShowForm(true);
    };

    return (
        <>
        <h5>Account created successfully.</h5>
        <button type="button" className="btn btn-light" onClick={handleAccountReset}>Create Another Account</button>
        </>
    );
};

