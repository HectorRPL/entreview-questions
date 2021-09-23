const a = 'hector';
const b = 'gabi';
const c = [...a, b];

Then 'c' returns:
['h', 'e', 'c', 't', 'o', 'r', 'gabi'];

When you set three dots operator (...) to create
a new array, but you are sending an string
'hector' then you will get an array for each
character of that string.

const 'a' must be as follows:

const a = ['hector'];
