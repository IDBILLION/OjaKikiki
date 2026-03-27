export const Feedback = () => {
    return(
        <>
        <div>
            <h1>Feedback</h1>
            <p>Please fill out the form below to help improve on how to serve you better.</p>
            <form>
                <fieldset>
                    <legend>Enter your details</legend>
                        <label>Full Name: </label>
                        <input type="text" name="Full Name" required />
                        <label>Email Address</label>
                        <input type="email" name="email" required />
                </fieldset>
                <fieldset></fieldset>
            </form>
        </div>
        </>
    )
}