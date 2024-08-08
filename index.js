const express = require('express');
const app = express();


app.get('/', (req, res) => {
    const users = [
        {
            name: 'Ziad Talaat',
            age: 22,
            email: 'ziadtallat33@gmail.com'
        },
    ]

    res.json({ users: users });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
