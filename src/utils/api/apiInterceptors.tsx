import axios from 'axios';
import {ServerConstants} from "./ServerEnum.tsx";
import {CustomBottomSheetModel} from "../../components/CustomBottomSheetModel.tsx";
import LoginBottomSheetView from "../../components/bottomSheet/login/View/LoginBottomSheetView.tsx";
import BottomSheetObserver from "../../components/bottomSheet/BottomSheetObserver.tsx";
import CustomBottomSheetObserver from "../../components/bottomSheet/BottomSheetObserver.tsx";

export const jsonPlaceholderRequest = axios.create({
    baseURL: ServerConstants.SERVER_URL.toString(),
    withCredentials: true,
    timeout: 3000,
});

jsonPlaceholderRequest.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.log("에러발생", error.response)
        return Promise.reject(error);
    }
);

jsonPlaceholderRequest.interceptors.response.use(
    (response) => {
        console.log("반환값", response);
        return response;
    },
    async (error) => {
        if (error.response.status === 401 && error.response.data === "need access token") {
            // 토큰이 필요한 순간에 토큰이 없음
            console.log("토큰발급이 필요합니다")
            // 토큰 필요
            // 로그인 페이지로
            const pk: string = crypto.randomUUID();
            const bottomSheetModel: CustomBottomSheetModel = new CustomBottomSheetModel(
                <LoginBottomSheetView pk={pk}
                                      loginSucceed={(pk:string) => {
                                          console.log("aa 로그인 성공")
                                          CustomBottomSheetObserver.hideBottomSheet(pk)
                                      }}
                                      loginFailed={(pk:string) => {
                                          console.log("aa 로그인 실패")
                                          CustomBottomSheetObserver.hideBottomSheet(pk)
                                      }}
                />);

            bottomSheetModel.backgroundColor = "rgb(0, 0, 0, 0.7)";
            bottomSheetModel.pk = pk;
            bottomSheetModel.backgroundTouchClose = true;
            BottomSheetObserver.showBottomSheet(bottomSheetModel);
        }
        return Promise.reject(error);
    }
);