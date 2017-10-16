function uploadImageToCloudinary(file) {
	var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/ornito-media/image/upload'
	var CLOUDINARY_PRESET_UPLOAD = 'hazaok5z'
	var formData = new FormData();
	formData.append('file', file);
	formData.append('upload_preset', CLOUDINARY_PRESET_UPLOAD);
	return axios({
		url: CLOUDINARY_URL,
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: formData
	})
}
