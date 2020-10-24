const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000

app.set('view engine', 'ejs');

app.use('/assets',express.static(path.join(__dirname ,'./assets')))
app.use('/invoice/assets',express.static(path.join(__dirname ,'./assets')))

app.get('/404',(req ,res) => {

    res.render('404');

    }
);

app.get('/', (req, res) => {
   res.render('register');
});

app.get('/dashboard',(req ,res) => {
        res.render('dashboard');
    }
);


app.get('/book_appointment',(req ,res) => {
        res.render('new-appointment');
    }
);


app.get('/appointment_details',(req ,res) => {
        res.render('appointment-details')
    }
);

app.get('/invoices',(req ,res) => {
        res.render('invoices-grid')
    }
);


app.get('/profile',(req ,res) => {
        res.render('profile')
    }
);


app.get('/invoices/single-invoice',(req ,res) => {
        res.render('invoice')
    }
);



app.get('/logout',(req ,res) => {
        res.render('login')
    }
);
app.get('/login',(req ,res) => {
        res.render('login')
    }
);

app.get('/invoices/single-invoice/print',(req ,res) => {
        res.render('invoice_print');
    }
);

app.get('/password_recovery',(req ,res) => {
        res.render('forgot_password');
    }
);


app.listen(port , () =>{
    console.log(`server running on port ${port}`);
});
