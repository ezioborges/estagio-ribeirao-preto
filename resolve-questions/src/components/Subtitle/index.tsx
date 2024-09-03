type SubtitleProp = {
    children: React.ReactNode,
}

function Subtitle({ children }: SubtitleProp) {
    return (
        <>
            <h2>{ children }</h2>
        </>
    );
};

export default Subtitle;
