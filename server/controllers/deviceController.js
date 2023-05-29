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

            // if (info) {
            //     const infoArray = JSON.parse(info)
            //     const infoDocuments = infoArray.map(i => ({
            //         deviceId: device.id,
            //         title: i.title,
            //         description: i.description,
            //     }))
            //     await deviceInfoModel.insertMany(infoDocuments)
            // }

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let devices = await Device.find({})
        return res.json(devices)
    }

    // async getAll(req, res) {
    //     let { brandId, typeId, limit, page } = req.body
    //     page = page || 1
    //     limit = limit || 9
    //     let offset = page * limit - limit
    //     let query = {};
    //     let devices;
    //     if (brandId) {
    //         query.brandId = brandId;
    //     }
    //     if (typeId) {
    //         query.typeId = typeId;
    //     }

    //     devices = await Device.find(query).limit(limit).skip(offset);
    //     return res.json(devices)
    // }

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