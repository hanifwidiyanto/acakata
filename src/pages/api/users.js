export default async function handler(req, res) {
    const response = await fetch('http://localhost:8000/users')
    const data = await response.json()

    if (!data) {
        return res.status(404).json({
            message: 'Data not found'
        })
    }

    return res.status(200).json(data)
}