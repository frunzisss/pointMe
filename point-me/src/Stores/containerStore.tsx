
import { observable, action } from 'mobx';
import { apiClient } from '../API/apiClient';

export class ContainerStore {
    @observable public response: any;
    @observable private amount: number = 100;
    @observable public fromC: string = 'RON';
    @observable public toC: string = 'EUR';

    @action public makeRequest = async () => {
        const result = await apiClient.fetchCurrencies(this.fromC);
        const response = await result.json();
        this.response = (response.rates[this.toC] * this.getAmount()).toFixed(4);
    }

    @action public updateFromC = (base: string) => {
        this.fromC = base;
        this.makeRequest();
    }

    @action public updateToC = (base: string) => {
        this.toC = base;
        this.makeRequest();
    }

    @action public updateAmount = (amount: number) => {
        this.amount = amount;
        this.makeRequest();
    }

    public getAmount = () => {
        return this.amount;
    }
}

export const containerStore = new ContainerStore();