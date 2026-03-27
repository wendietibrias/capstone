import { Spin } from "antd";

export default function Loading(){
    return (
        <div className="flex items-center justify-center h-screen w-full fixed top-0 left-0">
            <Spin size="large" />
        </div>
    )
}