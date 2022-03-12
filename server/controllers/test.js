const index = (req, res) => {
    return(res.json({
        test:"hello",
    }));
}

module.exports = {
    index,
}
