const AllData = () => {
    return (
        <>
        <Card
            bgColor="secondary"
            header="All Data"
            body={<DataStatus/>}
        />
        </>
    );
};

const DataStatus = () => {
    
    const [data, setData] = React.useState([]);
    const [success, setSuccess] = React.useState(false);

    const url = "/account/data";

    React.useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {setData(data); setSuccess(true);})
            .catch(err => setSuccess(false));
    }, []);

    return (
        <>
        <h5>
        {success ? <ul>{data.map(item => <li>{JSON.stringify(item)}</li>)}</ul> : "Check balance failed."}
        </h5>
        </>
    );
};