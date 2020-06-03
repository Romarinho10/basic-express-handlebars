const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');


const app = express();


//settings
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About',
        name: 'Jhon',
        isDisplayedName: false    
    });
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});
