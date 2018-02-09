import * as React from 'react';

export class APIClient {

    private makeRequest = async (base: string) => {
        return fetch(`https://api.fixer.io/latest?base=${base}`, {
            method: 'GET'
        });
    }
}

export const apiClient = new APIClient();