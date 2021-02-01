import { getAllEndpoint, getDetails, deleteClient, createClient, updateClient, serviceAddress } from "../Config";
import { Rpc } from "./Rpc";

export class Api {
    static getClientList = () => {
        const response = Rpc.fetchGetMethod(
            serviceAddress,
            getAllEndpoint
        );
        return Rpc.getResponse(response);
    }

    static getClientDetails = (id) => {
        const response = Rpc.fetchGetMethod(
            serviceAddress,
            getDetails + id
        );
        return Rpc.getResponse(response);
    }

    static deleteClient = (id) => {
        const response = Rpc.fetchDeleteMethod(
            serviceAddress,
            deleteClient + id
        );
        return Rpc.getResponse(response);
    }

    static createClient = (info) => {
        const response = Rpc.fetchPostMethod(
            serviceAddress,
            createClient,
            info
        );
        return Rpc.getResponse(response);
    }

    static updateClient = (info) => {
        const response = Rpc.fetchPutMethod(
            serviceAddress,
            updateClient,
            info
        );
        return Rpc.getResponse(response);
    }
}