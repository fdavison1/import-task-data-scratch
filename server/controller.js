module.exports = {
    getTasks: (req, res) => {
        console.log('fred')
        const db = req.app.get('db')
        db.get_tasks()
        .then(result => {
            console.log(result)
            res.status(200).send(result)
        })
    }
}