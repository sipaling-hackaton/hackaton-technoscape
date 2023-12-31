import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import BottomNav from "./Components/BottomNav";
import TopNav from "./Components/TopNav";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div
            style={{
                height: "100vh",
                width: "100%",
            }}
        >
            <TopNav />
            <div className="    ">{children}</div>
            <div
                className="bg-[#f5f0e8]"
                style={{ height: "calc(10vh + 1rem)", width: "100vw" }}
            ></div>
            <BottomNav />
        </div>
    );
}
