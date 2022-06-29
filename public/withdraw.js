const Withdraw = () => {
    const [showForm, setShowForm] = React.useState(true);
    const [success, setSuccess] = React.useState(false);

    return (
        <>
        <Card
            bgColor="warning"
            header="Withdraw"
            body={showForm ? <WithdrawForm setShowForm={setShowForm} setSuccess={setSuccess}/> : <WithdrawStatus setShowForm={setShowForm} success={success}/>}
        />
        </>
    );
};

const WithdrawForm = ({setShowForm, setSuccess}) => {

    const [amount, setAmount] = React.useState(0);
    const ctx = React.useContext(UserContext);

    const handleWithdraw = () => {
        
        const url = `/account/withdraw/${ctx.currentUser}/${amount}`;

        fetch(url)
            .then(response => {response.ok ? setSuccess(true) : setSuccess(false)})
            .catch(err => setSuccess(false));
        setShowForm(false);
    };

    return (
        <>
        <div className="mb-3">
            <label htmlFor="withdraw-amount" className="form-label">Withdraw amount</label>
            <input type="number" className="form-control" id="withdraw-amount" placeholder="0" onChange={e => setAmount(e.target.value)}/>
        </div>
        <button type="button" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
        </>
    );
};

const WithdrawStatus = ({setShowForm, success}) => {
    
    const handleWithdrawReset = () => {
        setShowForm(true);
    };

    return (
        <>
        <h5>{success ? "Withdrawal successful." : "Withdrawal failed."}</h5>
        <button type="button" className="btn btn-light" onClick={handleWithdrawReset}>Make another withdrawal</button>
        </>
    );
};
