import mongoose from 'mongoose'

const dbConnection = async () => {
    const dbUri = process.env.DB_CNN

    if (!dbUri) {
        throw new Error('DB_CNN environment variable is not defined')
    }

    try {
        await mongoose.connect(dbUri)
        console.log(`\x1b[33m MONGO DB => Online`)
    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de inicializar BD')
    }
}

export {dbConnection}