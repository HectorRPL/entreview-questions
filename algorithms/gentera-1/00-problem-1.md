Implement a simple prototype service to find the difference between two JSON objects.

To keep the prototype simple, a `JSON` will contain only `key-value` pairs and no nested `objects` or `arrays` in it.

Given two `JSON strings` `json1` and `json2`, find the list of `keys` for which the values are different. If a `key` is present in only one of the `JSON`s, it should not be considered in the result. 

The list of keys should be sorted in lexicographically ascending order.

Example:

Suppose JSON1:
````json
{
    "hello": "world",
    "hi": "hello",
    "you": "me"
}
````
    

JSON2

````json
{
    "hello": "world",
    "hi": "helloo",
    "you": "me"
}
````

The only common key where the values differ is `hi`, hence the answer is `hi`

