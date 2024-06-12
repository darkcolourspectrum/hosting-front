import { Axios, AxiosPromise } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";
import { ILoginResponse, ILoginRequest, IRegisterRequest, IRegisterResponse } from "./types"

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> => 
    axiosInstance.post(Endpoints.AUTH.LOGIN, params)

export const register = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
    axiosInstance.post(Endpoints.AUTH.LOGIN, params)