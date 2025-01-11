import express from 'express'
import { getAllData, getDataById, createData, updateData, deleteData } from '../controller/controller.js'

export const Router = express.Router()

console.log('hello')
Router.get('/', getAllData)

Router.get('/:name', getDataById)

Router.post('/', createData)

Router.put('/:id', updateData)

Router.delete('/:id', deleteData)




