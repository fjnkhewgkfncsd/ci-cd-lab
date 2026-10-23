import app from './app.js';

const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    console.log(`Visit http://localhost:${port} to see the app in action.`);
})