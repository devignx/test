import Calendar from "@/components/component/date-picker";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Image
                className="fixed opacity-70 top-0 left-0 w-screen h-screen object-cover"
                src={"/dark.png"}
                alt="Dark mode"
                width={1200}
                height={1000}
                quality={100}
            />
            <Calendar />
        </main>
    );
}
