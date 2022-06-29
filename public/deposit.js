const Deposit = () => {
    
    const [showForm, setShowForm] = React.useState(true);
    const [success, setSuccess] = React.useState(false);

    return (
        <>
        <Card
            bgColor="warning" 
            header="Deposit"
            body={showForm ? <DepositForm setShowForm={setShowForm} setSuccess={setSuccess}/> : <DepositStatus setShowForm={setShowForm} success={success}/>}/>
        </>
    );
};

const DepositForm = ({setShowForm, setSuccess}) => {
    
    const [amount, setAmount] = React.useState(0);

    const ctx = React.useContext(UserContext);

    const handleDeposit = () => {

        const url = `/account/deposit/${ctx.currentUser}/${amount}`;

        fetch(url)
            .then(response => {response.ok ? setSuccess(true) : setSuccess(false)})
            .catch(err => {console.log(err); setSuccess(false);});
        setShowForm(false);
    };

    return (
        <>
        <div className="mb-3">
            <label htmlFor="deposit-amount" className="form-label">Deposit amount</label>
            <input type="number" className="form-control" id="deposit-amount" placeholder="0" onChange={e => setAmount(e.target.value)}/>
        </div>
        <button type="button" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
        </>
    );
};

const DepositStatus = ({setShowForm, success}) => {

    const handleDepositReset = () => {
        setShowForm(true);
    };

    return (
        <>
        <h5>{success ? "Deposit successful." : "Deposit failed."}</h5>
        <button type="button" className="btn btn-light" onClick={handleDepositReset}>Make another deposit</button>
        </>
    );
};