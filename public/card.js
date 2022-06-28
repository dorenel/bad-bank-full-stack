const Card = (props) => {
    const bgColor = props.bgColor;
    const header = props.header;
    const body = props.body;

    const classNameString = "card text-bg-" + bgColor + " mb-3";

    return (
        <div className={classNameString} style={{maxWidth: "18rem"}}>
            <div className="card-header">{header}</div>
            <div className="card-body">
                {body}
            </div>
        </div>
    );
};