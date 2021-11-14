function AlertError({message, visible}) {
    return (
        <div className={visible ? "alert alert-danger" : "visually-hidden"}>
            <strong>{message}</strong>
            <br/>
            Please try again !!
        </div>
    )
}

export default AlertError