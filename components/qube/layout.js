
export function MainScreen(props) {
    return (
        <div className="w-[1440px] h-[866px] flex justify-center items-center relative bg-zinc-100 rounded-[32px]">
            {props.children}
        </div>
    );
}

export function LeftPanel(props) {
    return (
        <div className="w-[601px] h-[755px] flex-col justify-between items-center inline-flex">
            {props.children}
        </div>
    );
}

export function PanelContainer(props) {
    return (
        <div className="w-[1329px] h-[755px] justify-between items-start inline-flex relative">{props.children}</div>
    );
}

export function ProjectRightPanel(props) {
    return (
        <div className="w-[665px] h-[685.03px] justify-start items-start gap-[23px] inline-flex">
            {props.children}
        </div>
    );
}

export function ImageRightPanel(props) {
    return (
        <div className="w-[665px] h-[751px] relative rounded-[14px]">
            {props.children}
        </div>
    );
}

export function TopLeftContainer(props){
    return(
        <div className="w-[601px] h-auto justify-between items-start inline-flex">
            {props.children}
    </div>
    )
}
 