type TitleProp = {
    children: React.ReactNode,
};

function Title({ children }: TitleProp) {
    return (
        <>
            <h1>{children}</h1>
        </>
    );
};


export default Title;
