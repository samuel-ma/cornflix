
const ratings = {
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #acabcf",
};

const stars = {
    display: "flex",
    alignItems: "center",
}

const add = {
    cursor: "pointer",
    width: "100%",
    border: "none",
    padding: "15px",
    borderRadius: "10px",
    backgroundColor: "#6741d9",
    color: "white",
    marginTop: "10px",
}

const starDiv = {
    display: "flex",
    alignItems: "center",
}

const number = {
    margin: "0px",
}

export const Stars = ({ max = 5 }) => {

    return (
        <section style={ratings}>
            <div style={stars}>
                <div style={starDiv}>
                    {/* {Array.from({ length: max }, (_, i) => {
                        <Empty key={i} />
                    })} */}

                    <Empty />
                    <Empty />
                    <Empty />
                    <Empty />
                    <Empty />
                </div>

                <p style={number}>10</p>
            </div>

            <button style={add}>+ Add to list</button>
        </section>
    )
}

const staricons = {
    width: "25px",
    height: "25px",
    objectFit: "contain",
    objectPosition: "center",
    cursor: "pointer",
}

export const Full = () => {
    return (
        <div style={starDiv} role="button">
            <img style={staricons} width="64" alt="Full Star Yellow" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/64px-Full_Star_Yellow.svg.png" />
        </div>
    )
}

export const Empty = () => {
    return (
        <div style={starDiv} role="button">
            <img style={staricons} width="64" alt="Empty Star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/64px-Empty_Star.svg.png" />
        </div>
    )
}
