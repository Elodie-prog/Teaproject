/*exports.getNoteById = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Note with id: ${req.params.id}`
    })

};
*/

exports.getNoteById = (req, res, next) => {
    res.render("notes/edit", {id: 1, title: Jasmine
    }
    )
}

exports.modifyById = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Modify info with id: ${req.params.id}`
    })
};

exports.deleteById = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Delete note with id: ${req.params.id}`
    })
};

exports.createById = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Add new note with id: ${req.params.id}`
    })
};