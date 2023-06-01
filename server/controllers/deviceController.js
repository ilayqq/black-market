const uuid = require('uuid')
const path = require('path');
const Device = require('../models/deviceModel.js')
const ApiError = require('../error/ApiError.js');

class DeviceController {
    async create(req, res, next) {
        try {
            const { name, price, rating, title, description, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({ name, price, rating, title, description, img: fileName })
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let devices = await Device.find({})
        return res.json(devices)
    }

    async getOne(req, res) {
        const { id } = req.params
        const device = await Device.findOne(
            {
                _id: id
            },
        )
        return res.json(device)
    }
}

module.exports = new DeviceController()