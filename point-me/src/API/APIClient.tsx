
export class APIClient {

    private makeRequest = async (base: string) => {
        return fetch(`https://api.fixer.io/latest?base=${base}`, {
            method: 'GET'
        });
    };

    public fetchCurrencies = async (base: string) => {
        return  this.makeRequest(base);
        //return result;
    }
}

export const apiClient = new APIClient();