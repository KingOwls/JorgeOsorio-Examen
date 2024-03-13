JSON_URL ="http://154.38.171.54:3001/priceA"
HEADERS={}

Persona={
    "Name": "",
    "NumberPhone": "",
    "email": "",
    "Costos": 0
}
class data {
    async loadData(endPoint){
        try {
            const data = await fetch(`${this.JSON_API}${this.mapKeys(endPoint)}`,{
                method: "GET",
                headers: this.HEADERS
            }).then(data => data.json())
            return data
        } catch (error) {
            return {}
        }
    }

    async saveData(endPoint, object){
        try {
            const data = await fetch(`${this.JSON_API}${this.mapKeys(endPoint)}`,{
                method: "POST",
                headers: this.HEADERS,
                body: JSON.stringify(object)
            })
            return data
        } catch (error) {
            return {}
        }

    }
}