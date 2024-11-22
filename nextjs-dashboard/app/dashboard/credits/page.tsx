import Image from "next/image";

export default function Page() {
    return (
        <div className="flex justify-center items-center flex-col gap-4">
            <Image
                src="/avatar/me.jpg"
                className="rounded-full"
                alt="that's me"
                width={128}
                height={128}
            />
            <p>Cet examen est l'oeuvre de Nino Toutain</p>
        </div>
    );
}