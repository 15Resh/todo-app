import { isValidObjectId } from "mongoose"
import { user } from "../model/user.js"


export const getAllData = async (req, res) => {
    const allData = await user.find()
    res.json({ data: allData })
}


export const getDataById = async (req, res) => {
    const { name } = req.params
    const dataByid = await user.find({ name })
    res.json({
        data: dataByid
    })
}


export const createData = async (req, res) => {
    const { name, email, phone } = req.body
    const userData = {
        name,
        email,
        phone
    }
    const savedData = await user.create(userData)
    res.json({
        data: savedData
    })
}


export const updateData = async (req, res) => {

    const { name, email, phone } = req.body
    const {id} = req.params
    const userData = {
        name,
        email,
        phone
    }
    await user.updateOne({ _id:id}, userData)
    res.json({
        data: {
            status: 1,
            message: 'data updated successfully'
        }
    })
}


export const deleteData = async (req, res) => {
    const { id } = req.params
    await user.deleteOne({ _id:id })
    res.json({
        data: {
            status: 1,
            message: 'data deleted successfully'
        }
    })
}
