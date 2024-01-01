const cloudinary = require('cloudinary');

cloudinary.config({

    cloud_name: 'dr4fwbjox',
    api_key: '848945433293226',
    api_secret: 'fEJ1X9rvTNnN49TUQXHwn4cf3iw'
})


const uploadOnCloudinary = async (path) => {

    try {
        if (!path) return null;
        const resp = cloudinary.v2.uploader.upload(path);
        return resp;
    } catch (error) {
        console.log(error)
    }
}

module.exports = uploadOnCloudinary