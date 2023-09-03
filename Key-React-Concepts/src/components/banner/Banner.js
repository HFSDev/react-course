const Banner = ({
    img,
    title,
    text
}) => {
    return (
        <header>
        <img src={img.path} alt={img.alt} />
        <h1>{title}</h1>
        <p>{text}</p>
        </header>
    );
}

export default Banner;