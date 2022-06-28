const AllData = () => {
    //const ctx = React.useContext(UserContext);

    const [data, setData] = React.useState("");

    const url = "/account/data";

    React.useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(JSON.stringify(data)));
    }, []);

    return (
        <>
        All Data
        {data}
        </>
    );
}