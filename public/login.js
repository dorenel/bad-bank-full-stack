const Login = () => {

    const [showForm, setShowForm] = React.useState(true);
    const [success, setSuccess] = React.useState(false);

    return (
        <>
        <Card
            bgColor="success" 
            header="Login"
            body={showForm ? <LoginForm setShowForm={setShowForm} setSuccess={setSuccess}/> : <LoginStatus setShowForm={setShowForm} success={success}/>}/>
        </>
    );
};

const LoginForm = ({setShowForm, setSuccess}) => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const ctx = React.useContext(UserContext);

    const handleLogin = () => {

        const url = `/account/login/${email}/${password}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {ctx.currentUser = data[0]._id; setSuccess(true);})
            .catch(err => setSuccess(false));
        
        setShowForm(false);
    };

    return (
        <>
        <div className="mb-3">
            <label htmlFor="login-email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="login-email" placeholder="email@example.com" onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="login-password" className="form-label">Password</label>
            <input type="password" className="form-control" id="login-password" placeholder="" onChange={e => setPassword(e.target.value)}/>
        </div>
        <button type="button" className="btn btn-light" onClick={handleLogin}>Log In</button>
        </>
    );
};

const LoginStatus = ({setShowForm, success}) => {
    
    const handleLoginReset = () => {
        setShowForm(true);
    };

    return (
        <>
        {success ? 
            <h5>"Login successfull."</h5> : 
            <>
            <h5>"Login failed."</h5>
            <button type="button" className="btn btn-light" onClick={handleLoginReset}>Return to login page.</button>
            </>
        }
        </>
    );
};