module.exports.timeMiddleware= (req,res,next) => {
    const day=new Date().getDay()
    const hour=new Date().getHours()
    if (day>=1 && day<=5 && hour>=9 && hour<=17) {
        next();
    }
    else{
        res.status(403).send('This web application is available during working hours : Monday to Friday,  from 9 to 17')
    }
}

