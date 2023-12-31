import { Link } from "@inertiajs/react";
import Layout from "@/Layouts/AppLayout";
import bg from "./Assets/bg.svg";
import { useState } from "react";
import Lottie from "lottie-react";
import "./Quest.css";
import animationData from "./Assets/animation_lkn2qa7f.json";
import checked from "./Assets/cheked.svg";
import circleBox from "./Assets/circleBox.svg";
import { useForm } from "@inertiajs/react";
import { Modal } from "antd";

export default function Task(props: any) {
    const [active, setActive] = useState(0);
    const questsArr = [
        { id: 1, title: "MENCARI SI NEKO", status: true },
        { id: 2, title: "SEBUAH RAHASIA", status: false },
        { id: 3, title: "SIAPAKAH ITU", status: false },
        { id: 1, title: "SIAPAKAH ITU", status: false },
    ];

    // const rewardsArr = [
    //     {
    //         title: "1000 XP",
    //         subtitle: "CHATIME 1PCS",
    //         img: "https://cdn.discordapp.com/attachments/1134526928834015253/1134543368517603439/chatime.jpg",
    //     },
    //     {
    //         title: "1000 XP",
    //         subtitle: "CHATIME 1PCS",
    //         img: "https://cdn.discordapp.com/attachments/1134526928834015253/1134543368517603439/chatime.jpg",
    //     },
    //     {
    //         title: "1000 XP",
    //         subtitle: "CHATIME 1PCS",
    //         img: "https://cdn.discordapp.com/attachments/1134526928834015253/1134543368517603439/chatime.jpg",
    //     },
    // ];

    const questRewardsArrays = [
        <Quests data={questsArr} />,
        <Rewards data={props.rewardList} activeAccount={props.activeAccount} />,
    ];

    return (
        <div className="mx-auto max-w-[750px] min-h-[90vh] bg-[#F6F1E9]">
            <div className="relative flex flex-col text-center min-h-[50vh] items-center">
                <img className="z-10 absolute w-screen  w-[100%]" src={bg} />
                <Lottie
                    style={{ width: "60%", bottom: "-0%", right: "3%" }}
                    className="z-10 absolute"
                    animationData={animationData}
                />
                <div className="relative flex flex-col z-20 font-mouse text-white font-bold">
                    <span className="mt-8 font-poppins font-semibold">
                        TANTANGAN
                    </span>
                    <span className="text-[2rem]">PROGRESS KAMU</span>
                    <div className="flex gap-2">
                        <img
                            className="w-1/4 h-max mt-8 aspect-square"
                            src={
                                questsArr[0].status
                                    ? checked
                                    : "https://cdn.discordapp.com/attachments/1134526928834015253/1134590623148683264/Ellipse.png"
                            }
                        />
                        <img
                            className="w-1/4 h-max mb-8 aspect-square"
                            src={
                                questsArr[1].status
                                    ? checked
                                    : "https://cdn.discordapp.com/attachments/1134526928834015253/1134590623148683264/Ellipse.png"
                            }
                        />
                        <img
                            className="w-1/4 h-max mt-8 aspect-square"
                            src={
                                questsArr[2].status
                                    ? checked
                                    : "https://cdn.discordapp.com/attachments/1134526928834015253/1134590623148683264/Ellipse.png"
                            }
                        />
                        <img
                            className="w-1/4 h-max mb-8 aspect-square"
                            src={questsArr[3].status ? checked : circleBox}
                        />
                    </div>
                </div>
            </div>
            <div className="">
                <div className="relative flex z-20 text-[#7e29cd] border-[#7e29cd] bg-white border-4 rounded-[2rem] p-1 mx-4">
                    <div
                        style={{
                            left: active == 0 ? "4px" : "calc(50% - 4px)",
                            // right: active == 1 ? "0px" : "",
                            alignSelf: "center",
                            transition: "0.8s ease",
                        }}
                        className="absolute z-10 rounded-[2rem] bg-[#7e29cd] w-1/2 h-[2.5rem]"
                    >
                        {" "}
                    </div>
                    <span
                        onClick={() => setActive(0)}
                        className={
                            "relative z-20 w-1/2 text-center font-bold rounded-[2rem] p-2 " +
                            (active == 0 ? " text-white" : " text-[#7e29cd] ")
                        }
                    >
                        QUESTS
                    </span>
                    <span
                        onClick={() => setActive(1)}
                        className={
                            "relative z-20 w-1/2 text-center font-bold rounded-[2rem] p-2 " +
                            (active == 1 ? " text-white" : " text-[#7e29cd] ")
                        }
                    >
                        REWARDS
                    </span>
                </div>
                <div className="relative z-20">
                    {questRewardsArrays[active]}
                </div>
            </div>
        </div>
    );
}

const Quests = ({ data }: any) => {
    return (
        <div className="p-4 relative z-20">
            {data.map((e: any, index: any) => {
                return (
                    <Link className="" href={"/quest/detail/" + index}>
                        <div className="flex justify-between p-2">
                            <div className="flex gap-4">
                                <img src="https://cdn.discordapp.com/attachments/1134526928834015253/1134538232550408302/Search.png" />
                                <span
                                    className={
                                        "text-[#7e29cd] " +
                                        (e.status && " line-through")
                                    }
                                >
                                    {e.title}
                                </span>
                            </div>
                            <input
                                className={"border-[#7e29cd] accent-[#7e29cd] "}
                                type="checkbox"
                                checked={e.status}
                                readOnly
                            />
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

const Rewards = ({ data, activeAccount }: any) => {
    const { setData, post } = useForm({
        exp: 0,
    });
    const [cost, setCost] = useState<number>(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (value: any) => {
        setCost(value);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        if (cost < activeAccount.exp) {
            setData("exp", cost);
            // post("/");
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="p-4 w-full flex flex-col gap-4">
            {data.map((e: any, index: number) => {
                return (
                    <div
                        key={index}
                        onClick={() => showModal(e.xp_price)}
                        className="flex justify-between p-4 gap-2 bg-white rounded-xl drop-shadow-sm"
                    >
                        <div className="flex flex-col text-[#7e29cd]">
                            <div className="font-mouse text-4xl">
                                {e.xp_price} EXP
                            </div>
                            <div className="text-md">{e.name}</div>
                        </div>

                        <img
                            className="max-w-[80px] h-auto object-contain"
                            src={e.image}
                        />
                    </div>
                );
            })}

            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <span>EXP Kamu Sekarang {activeAccount.exp}</span>
                <br />
                {cost > activeAccount.exp ? (
                    <span>
                        Kamu tidak bisa menukarkan exp kamu karena exp yang kamu
                        miliki kurang dari yang dibutuhkan
                    </span>
                ) : (
                    <span>
                        Jika kamu menekan tombol ok maka exp yang kamu miliki
                        akan berkurang
                    </span>
                )}
            </Modal>
        </div>
    );
};

Task.layout = (page: any, logo: any) => <Layout children={page} />;
