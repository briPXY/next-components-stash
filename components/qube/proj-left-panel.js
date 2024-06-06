export function DynamicBarTitle({ height, year }) {
    return (
        <div className="w-[289px] h-[305px] flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="self-stretch text-black text-[52px] font-medium font-['Maven Pro'] leading-[53.04px]">OUR<br />PROJECTS</div>
            <div className="justify-start items-center inline-flex">
                <div className="w-5 relative" />
                <div className="w-[6px] relative bg-black" style={{height:`${height}px`}}/>
            </div>
            <div className="self-stretch text-black text-[52px] font-medium font-['Maven Pro'] leading-[53.04px]">{year}</div>
        </div>
    );
}