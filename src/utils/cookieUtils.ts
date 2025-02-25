export const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts: string[] = value.split(`; ${name}=`);
    if (parts.length === 2) {
        // 안전하게 pop() 호출 후 undefined 체크
        const cookieValue = parts.pop();
        if (cookieValue) {
            return cookieValue.split(';')[0];
        }
    }
    return null; // 쿠키가 없을 경우 null 반환
};
