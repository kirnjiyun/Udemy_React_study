import React from "react";
import "./Body.css";

export default function Body() {
    const user = {
        name: "지유니",
        isLogin: false,
    };
    return (
        <section className="body">
            {user.isLogin ? <div>마이페이지,로그아웃</div> : <div>로그인</div>}
        </section>
    );
}
