    const QuoteBody = ({Quote, Author}) => {

    return (
        <div className="QuoteBody">
            <h3>{Quote}</h3>
            <p>{Author}</p>
        </div>
    )
}


export default QuoteBody;