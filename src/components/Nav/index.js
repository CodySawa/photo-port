import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers"

function Nav(props) {

    // const [categories] = useState([
    //     {
    //         name: "commercial",
    //         description:
    //             "Photos of grocery stores, food trucks, and other commercial projects",
    //     },
    //     { name: "portraits", description: "Portraits of people in my life" },
    //     { name: "food", description: "Delicious delicacies" },
    //     {
    //         name: "landscape",
    //         description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    //     },
    // ]);

    // const [currentCategory, setCurrentCategory] = useState(categories[0]);

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    const handleClick = (item) => {
        console.log(item);
        return item;
    };

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>
                            Contact
                        </span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory.name === category.name && !contactSelected && `navActive`}`}
                            key={category.name}
                        >
                            <span onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                            }}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );

}

export default Nav;