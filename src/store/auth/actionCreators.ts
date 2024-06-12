import { Dispatch } from "@reduxjs/toolkit"
import api from "../../api"
import { ILoginRequest, IRegisterRequest} from "../../api/auth/types"
import { loginStart, loginSucess, loginFailure} from "./authReducer"
import { registerStart, registerSuccess, registerFailure} from "./authReducer"



export const loginUser =
  (data: ILoginRequest) =>
    async (dispatch: Dispatch<any>): Promise<void> => {
      try {
        dispatch(loginStart())

        const res = await api.auth.login(data)

        dispatch(loginSucess(res.data.accessToken))
        //dispatch(getProfile())
        
      } catch (e: any) {
        console.error(e)

        dispatch(loginFailure(e.message))
      }
    }

export const registerUser =
  (data: IRegisterRequest) =>
    async (dispatch: Dispatch<any>): Promise<void> => {
      try {
        dispatch(registerStart())

        await api.auth.register(data)

        dispatch(registerSuccess())
        
      } catch (e: any) {
        console.error(e)

        dispatch(registerFailure(e.message))
      }
    }
