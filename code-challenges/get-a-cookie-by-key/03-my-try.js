const cookies = 'key1=chocolate; key2=iceCream; key3=cookies;'

const getCookie = (cookies = '', name = '') => {
    const arr = cookies.split('; ')
    let obj = {}
    arr.forEach(cookie => {
        const key = cookie.split('=')[0]
        obj[key] = cookie.split('=')[1]
    })

    return obj[name]
}

console.log(getCookie(cookies, 'key2'));