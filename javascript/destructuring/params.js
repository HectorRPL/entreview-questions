const example = ({lastname, ...data}) => {
    console.log(data);
    console.log(lastname);
}

example({name: 'foo', lastname: 'bar'})