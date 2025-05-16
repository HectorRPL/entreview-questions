const App = () => {



    const handlePaste = (e) => {
        console.log(e);
    }

    return (<>
        <input
            type="text"
            onKeyDown={onKeyDownFun}
            onPaste={handlePaste}
            onChange={event => {
                // ... more code
            }}
        />
    </>)
}