const Balance = () => {
    return (
        <>
        <Card
            bgColor="info"
            header="Balance"
            body={<BalanceStatus/>}
        />
        </>
    );
};

const BalanceStatus = () => {
    const [success, setSuccess] = React.useState(false);
    const [balance, setBalance] = React.useState(0);

    const ctx = React.useContext(UserContext);

    React.useEffect(() => {

        const url = `/account/balance/${ctx.currentUser}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {setBalance(data[0].balance); setSuccess(true)})
            .catch(err => {setSuccess(false)});
    }, []);

    return (
        <>
        <h5>
        {success ? `Balance: $${balance}` : "Check balance failed."}
        </h5>
        </>
    );
};

