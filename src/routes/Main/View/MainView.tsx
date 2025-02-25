import {observer} from "mobx-react";
import {useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";
import {Button} from "react-bootstrap";
import MainViewModel from "../ViewModel/MainViewModel.tsx";
import {tokenRefresh} from "../../../service/AuthAPI.tsx";

export interface MainViewProps {
    someData: string;
}


const MainView= observer(() => {
    const navigate = useNavigate();
    const vm = useRef<MainViewModel | null>(new MainViewModel());

    useEffect(() => {
        console.log("View 마운트", navigate, vm)
        // vm.current?.init()
        // vm.current?.setNavigate(navigate)
        return () => {
            // ViewModel 정리 (필요할 경우)
            // 메모리 해제
            console.log("View 언마운트")
            // vm.current?.deinit();
            // vm.current = null;
        };
    }, []);

    return <>
        메인뷰 쿠키
        { document.cookie }
        <Button onClick={(event) => {
            event.preventDefault()
            vm.current?.snsLogin()
        }}>
            로그인!!
        </Button>

        <Button onClick={(event) => {
            event.preventDefault()
            vm.current?.tokenTest()
        }}>
            토큰으로 정보 가져오기
        </Button>

        <Button onClick={(event) => {
            event.preventDefault()
            tokenRefresh()
                .then(() => {
                    console.log("리프레쉬 성공")
                })
                .catch(error => {
                    console.log("리프레쉬 실패")
                    console.log(error)
                })
        }}>
            리프레쉬 토큰a
        </Button>

    </>
});


export default MainView;