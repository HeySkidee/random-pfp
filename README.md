# Random Pfp

A npm package that gives random 500x500 profile picture image links for user icons, avatars, or other creative uses

### Installation:

```
npm i random-pfp
```

### How to use:

```js
const pfp = require('random-pfp');

console.log(pfp());
```

or

```js
import pfp from 'random-pfp'

console.log(pfp())
```

### Example:

```js
const express = require('express');
const app = express();

const pfp = require('random-pfp');

app.get('/', (req, res)=>{
    res.send(`<img src="${pfp()}" width="250px">`)
})

app.listen(3000);
```

![image](https://github.com/user-attachments/assets/ba269f9a-afaa-4254-b841-2b80e0757cb9)
