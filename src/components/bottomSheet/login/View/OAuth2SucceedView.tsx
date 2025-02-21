import {useEffect} from "react";

const OAuth2SucceedView = () => {
    useEffect(() => {
        window.close()
    }, []);
    return <>
        성공
    </>
}

export default OAuth2SucceedView;