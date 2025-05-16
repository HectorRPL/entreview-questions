````javascript
const client = new ApolloClient({
    uri: '',
    cach: new InMemoryCache() // no es necesario
})

const index = () => {
    return(<>
        <ApolloProvider client={client}>
            <App />
        </>
    </>)
} 
````

###### app.js [GET]
````javascript
const MAIN_BOOKS = gql`
    query(
        count,
        getAll {bla, bla, bla}
)`

const App = () => {
    const {data, error, loading} = useQuery(MAIN_BOOKS)
    if (loading) return <p>cargado</p>
    if (error ) return <p>{error.mensaje}</p>
    
    return (<>{
        data?.bookCount.map(book => {
            return <div>{book}</div>
        })
    }</>)
}
````

###### app.js [MUTATION]
````javascript
const ADD_BOOK = gql`...query`

const App = () => {
    const [createBook] = useMutation(  // usalo en submit button
        ADD_BOOK,
        {refetchQueries: [{query: MAIN_BOOKS}]} // reelanzar "get books"
    )
    
    const onSubmit = async (e) => {
        const {data} = await createBook({
            variables: {...values}
        })
    }
    
    return (<>...mode code...</>)
}

````




