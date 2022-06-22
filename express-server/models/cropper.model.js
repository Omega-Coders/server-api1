const mongoose=require('mongoose');

const cropperSchema = mongoose.Schema({
    templateName: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    coordinates:{
        type: String
    },
    regex: {type: String,
        required: true
    },
})

const CropperModel = mongoose.model('CropperModel', cropperSchema);

module.exports = CropperModel;