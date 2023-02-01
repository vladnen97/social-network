import React from "react";
import s from "./SubmitPost.module.css"
import {Button} from "antd";

export function SubmitPost() {
    return (
        <div className={s.submitPost}>
            <textarea name="post" placeholder={"Whats new?"} cols={50} rows={5}></textarea>
            <Button size={"large"}> Post </Button>
        </div>
    );
}