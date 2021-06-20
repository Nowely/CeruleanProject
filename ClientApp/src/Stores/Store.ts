import {makeAutoObservable} from "mobx";
import {AffairStore} from "./AffairStore";

export class Store {
    //region Singleton
    private static _instance: Store;

    static get instance(): Store {
        if (!this._instance) {
            this._instance = new Store();
        }
        return this._instance;
    }

    private constructor() {
        makeAutoObservable(this)
    }

    //endregion

    affairStore: AffairStore = AffairStore.instance;
}