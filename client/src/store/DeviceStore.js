import { fetchDevices } from "../http/deviceAPI"

export default class DeviceStore {
    constructor() {
        // this._types = []
        // this.fetchTypes()
        // this._brands = []
        // this.fetchBrands()
        this._devices = []
        this.fetchDevices()
        // this._selectedType = []
        // this._selectedBrand = []
    }
    async fetchDevices() {
        const devices = await fetchDevices()
        this._devices = devices
    }
    // async fetchTypes() {
    //     const types = await fetchTypes()
    //     this._types = types
    // }
    // async fetchBrands() {
    //     const brands = await fetchBrands()
    //     this._brands = brands
    // }
    // setTypes(types) {
    //     this._types = types
    // }
    // setBrands(brands) {
    //     this._brands = brands
    // }
    setDevices(devices) {
        this._devices = devices
    }

    // setSelectedType(type) {
    //     this._selectedType = type
    // }
    // setSelectedBrand(brand) {
    //     this._selectedBrand = brand
    // }

    // get types() {
    //     return this._types
    // }
    // get brands() {
    //     return this._brands
    // }
    get devices() {
        return this._devices
    }
    // get selectedType() {
    //     return this._selectedType
    // }
    // get selectedBrand() {
    //     return this._selectedBrand
    // }
}