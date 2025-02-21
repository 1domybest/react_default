import {observer} from "mobx-react";
import {useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";
import {Button} from "react-bootstrap";
import MainViewModel from "../ViewModel/MainViewModel.tsx";

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
        메인뷰
        <Button onClick={(event) => {
            event.preventDefault()
            vm.current?.snsLogin()
        }}>
            로그인
        </Button>

    </>
});


export default MainView;