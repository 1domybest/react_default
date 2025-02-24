import {useEffect} from "react";
import {tokenRefresh} from "../../../../service/AuthAPI.tsx";

const OAuth2SucceedView = () => {
    useEffect(() => {
        tokenRefresh()
            .then(() => {
                console.log("로그인 성공")
                window.close()
            })
            .catch(error => {
                console.log("로그인 실패")
                console.log(error)
                window.close()
            })

    }, []);
    return <>
        성공
    </>
}

export default OAuth2SucceedView;