class data {
    async loadData(endPoint){
        try {
            const data = await fetch(`${this.URL_API}${this.mapKeys(endPoint)}`,{
                method: "GET",
                headers: this.HEADERS
            }).then(data => data.json())
            return data
        } catch (error) {
            return []
        }

    }

    async loadDataId(endPoint, id){
        try {
            const data = await fetch(`${this.URL_API}${this.mapKeys(endPoint)}/${id}`,{
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
            const data = await fetch(`${this.URL_API}${this.mapKeys(endPoint)}`,{
                method: "POST",
                headers: this.HEADERS,
                body: JSON.stringify(object)
            })
            return data
        } catch (error) {
            return {}
        }

    }

    async updateData(endPoint, object){
        try {
            const data = await fetch(`${this.URL_API}${this.mapKeys(endPoint)}/${object.id}`,{
                method: "PUT",
                headers: this.HEADERS,
                body: JSON.stringify(object)
            })
            console.log(data)
            return data
        } catch (error) {
            return {}
        }

    }

    async deleteData(endPoint, id){
        try {
            const data = await fetch(`${this.URL_API}${this.mapKeys(endPoint)}/${id}`,{
                method: "DELETE",
                headers: this.HEADERS
            })
            return data
        } catch (error) {
            return {}
        }

    }
}