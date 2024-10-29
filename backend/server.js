const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());




const uploadsDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}
app.use('/uploads', express.static(uploadsDir));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadsDir); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({ storage: storage });



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "hospital"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed");
    } else {
        console.log("Database connected");
    }
});


app.get('/search', (req, res) => {
    const data = `
    SELECT 
        nurses.id,
        nurses.name,
        nurses.duty_time,
        nurses.phone,
        nurses.duty_area,
        nurses.gender,
        patient.patient_name 
    FROM 
        nurses
    LEFT JOIN 
        patient ON nurses.id = patient.id
    `;

    db.query(data, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});


app.get('/filter', (req, res) => {
    const name = req.query.name;
    const sql = name ? 'SELECT * FROM nurses WHERE name=?' : 'SELECT * FROM nurses';
    const query = name ? [name] : [];
    db.query(sql, query, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});


app.get('/patient', (req, res) => {
    db.query('SELECT * FROM patient', (err, result) => {
        if (err) {
            throw err;
        } else {
            const obfuscatedResult = result.map(patient => ({
                ...patient,
                phone: obfuscatePhoneNumber(patient.phone)
            }));
            res.send(obfuscatedResult);
        }
    });
});

function obfuscatePhoneNumber(phone) {
    const phoneStr = String(phone);
    if (phoneStr.length > 5) {
        return phoneStr.slice(0, -5).replace(/./g, '*') + phoneStr.slice(-5);
    }
    return phoneStr.replace(/./g, '*');
}


app.post('/patient', (req, res) => {
    const data = [
        req.body.patient_name,
        req.body.age,
        req.body.gender,
        req.body.phone,
        req.body.address,
        req.body.app_with_doc,
        req.body.fee,
    ];
    db.query('INSERT INTO patient SET patient_name=?, age=?, gender=?, phone=?, address=?, app_with_doc=?, fee=?', data, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});


app.get('/doctor', (req, res) => {
    db.query('SELECT * FROM doctor', (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});


app.post('/doctor', upload.single('image'), (req, res) => {
    const imagePath = req.file ? req.file.filename : null; 
    const data = [
        req.body.name,
        req.body.qualification,
        req.body.gender,
        req.body.duty_time,
        req.body.scalary,
        req.body.room,
        imagePath 
    ];
    db.query('INSERT INTO doctor SET name=?, qualification=?, gender=?, duty_time=?, scalary=?, room=?, image=?', data, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});

 app.delete('/doctor/:id',(req, res)=>{
    const id=req.params.id  
    db.query('DELETE  FROM doctor WHERE id= ?',[id],(err,result)=>{
        if(err){
            throw err

        }else{
            res.send(result)
        }
    })
 })



app.get('/staff', (req, res) => {
    db.query('SELECT * FROM staff', (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});

app.delete('/staff/:id',(req,res)=>{
    const data=req.params.id
    db.query('DELETE FROM staff WHERE id=?',data,(err,result)=>{
        if(err){
            throw err
        }
        else
        {
            res.send(result)
        }
    })
})

app.post('/staff', (req, res) => {
    const data = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.gender,
        req.body.role,
        req.body.duty_time,
        req.body.scalary
    ];
    db.query('INSERT INTO staff SET name=?, email=?, phone=?, gender=?, role=?, duty_time=?, scalary=?', data, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});


app.get('/labs', (req, res) => {
    db.query('SELECT * FROM labs', (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});

app.post('/labs', (req, res) => {
    const data = [
        req.body.name,
        req.body.loacation,
        req.body.head,
        req.body.test_type,
        req.body.amount
    ];
    db.query('INSERT INTO labs SET name=?, loacation=?, head=?, test_type=?, amount=?', data, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});


app.get('/nurses', (req, res) => {
    db.query('SELECT * FROM nurses', (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});

app.post('/nurses', (req, res) => {
    const data = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.gender,
        req.body.duty_time,
        req.body.duty_area,
        req.body.role
    ];
    db.query('INSERT INTO nurses SET name=?, email=?, phone=?, gender=?, duty_time=?, duty_area=?, role=?', data, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send(result);
        }
    });
});


app.listen(3006, () => {
    console.log("Server is listening on port 3006");
});
