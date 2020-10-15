import { Carousel, Button, Container } from "react-bootstrap";
import { useState } from "react";

const style = {
    carousel: {
        marginBottom: "4rem",
        slide: {
            image: {
                minWidth: "100%",
                height: "32rem",
            },
            caption: {
                marginBottom: "3rem",
            },
            p: {
                fontSize: "1.25rem",
                marginBottom: "1.25rem",
            },
        },
    },
    marketing: {
        color: "#5a5a5a",
        item: {
            marginBottom: "1.5rem",
            textAlign: "center",
        },
    },
    featurette: {
        divider: {
            margin: "5rem 0",
        },
        image: {
            width: "500px",
            height: "500px",
        },
    },
};
const img_1x1 =
    "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

const data = [
    {
        title: "Another example headline.",
        description: `Cras justo odio, dapibus ac facilisis in, egestas
        eget quam. Donec id elit non mi porta gravida at
        eget metus. Nullam id dolor id nibh ultricies
        vehicula ut id elit.`,
        img: img_1x1,
        href: "#",
    },
    {
        title: "Another example headline.",
        description: `Cras justo odio, dapibus ac facilisis in, egestas
        eget quam. Donec id elit non mi porta gravida at
        eget metus. Nullam id dolor id nibh ultricies
        vehicula ut id elit.`,
        img: img_1x1,
        href: "#",
    },
    {
        title: "Another example headline.",
        description: `Cras justo odio, dapibus ac facilisis in, egestas
        eget quam. Donec id elit non mi porta gravida at
        eget metus. Nullam id dolor id nibh ultricies
        vehicula ut id elit.`,
        img: img_1x1,
        href: "#",
    },
    {
        title: "Another example headline.",
        description: `Cras justo odio, dapibus ac facilisis in, egestas
        eget quam. Donec id elit non mi porta gravida at
        eget metus. Nullam id dolor id nibh ultricies
        vehicula ut id elit.`,
        img: img_1x1,
        href: "#",
    },
];

export const SiteCarousel = React.memo(() => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = selectedIndex => {
        setActiveIndex(selectedIndex);
    };

    return (
        <Carousel
            activeIndex={activeIndex}
            onSelect={handleSelect}
            style={style.carousel}
        >
            {data.map((elem, index) => (
                <Carousel.Item key={`index-carousel-${index}`}>
                    <img src={elem.img} style={style.carousel.slide.image} />
                    <Container>
                        <Carousel.Caption style={style.carousel.slide.caption}>
                            <h1>{elem.title}</h1>
                            <p style={style.carousel.slide.p}>
                                {elem.description}
                            </p>
                            <Button type="primary" href={elem.href}>
                                Learn more
                            </Button>
                        </Carousel.Caption>
                    </Container>
                </Carousel.Item>
            ))}
        </Carousel>
    );
});
