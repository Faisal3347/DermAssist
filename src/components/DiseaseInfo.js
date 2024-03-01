import React from 'react';
import './diseaseInfo.css';
import Navbar1 from './Navbar1';
import { NavLink } from 'react-router-dom';

export default function DiseaseInfo() {
    function dropDownfun(event) {
        var button = event.currentTarget;
        var parentDiv = button.closest('.d1');
        var contentBlock = parentDiv.nextElementSibling;

        if (contentBlock) {
            var isContentVisible = contentBlock.classList.contains('show');

            if (isContentVisible) {
                contentBlock.classList.remove('show');
                button.textContent = '+';
            } else {
                contentBlock.classList.add('show');
                button.textContent = '-';
            }
        }
    }


    return (
        <>
            <Navbar1 />
            <div className="text_Container">
                <h1 className="Uppertext">
                    Your comprehensive guide to
                    <br />
                    skin health.
                </h1>
                <p>
                    Experts provide information on skin diseases, including symptoms,
                    <br />
                    causes, diagnosis, and treatment options.
                </p>
            </div>
            <div className="disease">
                <hr />
                <div className="d1">
                    <div className="text">
                        <h3>
                            Eczema 1677
                        </h3>
                    </div>
                    <div className="bts" style={{ marginLeft: "10rem" }}>
                        <button > <NavLink to="/Eczema/LearnMoreDisease"> Learn more </NavLink> </button>
                        <button className="sign" onClick={dropDownfun}> +</button>
                    </div>



                </div>
                <div className="bottom_content">
                    <div className="texts">
                        Eczema, or dermatitis, is a group of inflammatory skin conditions causing red, itchy skin. Atopic dermatitis is the most common type, affecting all ages due to genetic and environmental factors. The term "1677 skin diseases" may not correspond to a recognized categorization, but skin diseases span a diverse range from common issues like acne to rare disorders, making dermatology a dynamic field.
                    </div>
                    <div className="lists">
                        <ul>
                            <li style={{ fontSize: '1.2rem', color: 'red' }}>Symptoms</li>
                            <li>Itching & Redness.</li>
                            <li>Dryness & Inflammation.</li>
                            <li>Cracking.</li>
                            <li>Blisters or Oozing:</li>
                        </ul>
                    </div>
                </div>
                <hr />

                

                <div className="d1">
            <div className="text">
                <h3>
                Melanoma
                </h3>
            </div>
            <div className="bts" style={{ marginLeft: "12rem" }}>
                <button > <NavLink to="/Melanoma/LearnMoreDisease"> Learn more </NavLink> </button>
                <button className="sign" onClick={dropDownfun}> +</button>

            </div>
        </div>
        <div className="bottom_content">
            <div className="texts">
                Melanoma is a type of skin cancer that originates in the pigment-producing cells called melanocytes. These cells produce melanin, the pigment responsible for skin color. Melanoma is known for its potential to metastasize (spread) to other parts of the body, making early detection and treatment crucial.
            </div>
            <div className="lists">
                <ul>
<li style={{ fontSize: '1.2rem', color: 'red' }}>Symptoms</li>
                    <li>Changes in Moles.</li>
                    <li>Asymmetry.</li>
                    <li>Border Irregularity.</li>
                    <li>Color Changes.</li>
                </ul>
            </div>
        </div>
        <hr/>

        <div className="d1">
            <div className="text">
                <h3>
                 Atopic Dermatitis
                </h3>
            </div>
            <div className="bts" style={{ marginLeft: "8rem" }}>
            <button > <NavLink to="/AtopicDermatitis/LearnMoreDisease"> Learn more </NavLink> </button>
                <button className="sign" onClick={dropDownfun}> +</button>

            </div>
        </div>
        <div className="bottom_content">
            <div className="texts">
                Atopic dermatitis, commonly known as eczema, is a chronic skin condition characterized by inflammation, itching, and a red rash. It often begins in childhood and may persist or recur into adulthood. While the exact cause is unknown, it is believed to involve a combination of genetic and environmental factors.
            </div>
            <div className="lists">
                <ul>
<li style={{ fontSize: '1.2rem', color: 'red' }}>Symptoms</li>
                    <li>Areas Affected.</li>
                    <li>Sensitive & Scaly Skin.</li>
                    <li>Raised Bumps.</li>
                    <li>Itching & Dryness</li>
                </ul>
            </div>
        </div>
        <hr/>

        <div className="d1">
            <div className="text">
                <h3>
                Melanocytic Nevi   
                </h3>
            </div>
            <div className="bts" style={{ marginLeft: "8rem" }}>
                <button > <NavLink to="/MelanocyticNevi/LearnMoreDisease"> Learn more </NavLink> </button>
                <button className="sign" onClick={dropDownfun}> +</button>

            </div>
        </div>
        <div className="bottom_content">
            <div className="texts">
                Melanocytic nevi, commonly known as moles, are benign (non-cancerous) growths on the skin composed of melanocytes, the pigment-producing cells. Moles can vary in appearance, size, and color, and they can develop anywhere on the body. While most moles are harmless, some features may indicate a need for closer monitoring.
            </div>
            <div className="lists">
                <ul>
<li style={{ fontSize: '1.2rem', color: 'red' }}>Symptoms</li>
                    <li>Bleeding or crusting.</li>
                    <li>Rapid increase in size.</li>
                    <li>New raised or bumpy areas.</li>
                    <li>Itching or pain.</li>
                </ul>
            </div>
        </div>
        <hr/>

        <div className="d1">
            <div className="text">
                <h3>
                Warts Molluscum
                </h3>
            </div>
            <div className="bts" style={{ marginLeft: "8rem" }}>
                <button > <NavLink to="/WartsMolluscum/LearnMoreDisease"> Learn more </NavLink> </button>
                <button className="sign" onClick={dropDownfun}> +</button>

            </div>
        </div>
        <div className="bottom_content">
            <div className="texts">
                Molluscum contagiosum is an infection caused by a poxvirus (molluscum contagiosum virus). The result of the infection is usually a benign, mild skin disease characterized by lesions (growths) that may appear anywhere on the body. Within 6-12 months, Molluscum contagiosum typically resolves without scarring but may take as long as 4 years.The lesions, known as Mollusca, are small, raised, and usually white, pink, or flesh-colored with a dimple or pit in the center. They often have a pearly appearance. 
            </div>
            <div className="lists">
                <ul>
<li style={{ fontSize: '1.2rem', color: 'red' }}>Symptoms</li>
                    <li>Molluscum on eyelid.</li>
                    <li>Dome-shaped bumps.</li>
                    <li>Large bumps.</li>
                    <li>First sign.</li>
                </ul>
            </div>
        </div>
        <hr/>

        <div className="d1">
            <div className="text">
                <h3>
                Basal Cell Carcinoma
                </h3>
            </div>
            <div className="bts" style={{ marginLeft: "7rem" }}>
                <button > <NavLink to="/BasalCellCarcinoma/LearnMoreDisease"> Learn more </NavLink> </button>
                <button className="sign" onClick={dropDownfun}> +</button>

            </div>
        </div>
        <div className="bottom_content">
            <div className="texts">
                Basal cell carcinoma (BCC) is the most common type of skin cancer. It typically develops in areas of the skin that are exposed to the sun, such as the face and neck. While it is a slow-growing cancer and rarely spreads to other parts of the body, early detection and treatment are important for preventing damage to surrounding tissues.
            </div>
            <div className="lists">
                <ul>
<li style={{ fontSize: '1.2rem', color: 'red' }}>Symptoms</li>
                    <li>Pink or Red Patches.</li>
                    <li>Shiny Appearance.</li>
                    <li>Blood Vessels.</li>
                    <li>Skin Changes.</li>
                </ul>
            </div>
        </div>
        <hr/>


        <div className="d1">
            <div className="text">
                <h3>
                Seborrheic Keratoses
                </h3>
            </div>
            <div className="bts" style={{ marginLeft: "7rem" }}>
                <button > <NavLink to="/SeborrheicKeratoses/LearnMoreDisease"> Learn more </NavLink> </button>
                <button className="sign" onClick={dropDownfun}> +</button>

            </div>
        </div>
        <div className="bottom_content">
            <div className="texts">
                A seborrheic keratosis (seb-o-REE-ik ker-uh-TOE-sis) is a common noncancerous (benign) skin growth. People tend to get more of them as they get older.Seborrheic keratoses are usually brown, black or light tan. The growths (lesions) look waxy or scaly and slightly raised. They appear gradually, usually on the face, neck, chest or back.
            </div>
            <div className="lists">
                <ul>
<li style={{ fontSize: '1.2rem', color: 'red' }}>Symptoms</li>
                    <li>Varied in color, ranging from light tan to brown or black</li>
                    <li>Varied number, ranging from a single growth to multiple growths</li>
                    <li>Varied size, from very small to more than 1 inch (2.5 centimeters) across.</li>
                    <li>Itchiness</li>
                </ul>
            </div>
        </div>
        <hr/>

        <div className="d1">
            <div className="text">
                <h3>
                Tinea Ringworm Candidiasis
                </h3>
            </div>
            <div className="bts" style={{ marginLeft: "3rem" }}>
                <button > <NavLink to="/TineaRingwormCandidiasis/LearnMoreDisease"> Learn more </NavLink> </button>
                <button className="sign" onClick={dropDownfun}> +</button>

            </div>
        </div>
        <div className="bottom_content">
            <div className="texts">
                 Ringworm is a fungal infection and Candida is a family of fungi species that cause an infection called candidiasis. Ringworm and candidiasis are both fungal infections, but they are caused by different types of fungi.The conditions also affect different areas of the body. Ringworm is usually limited to the skin and nails while candida can also live inside the body, get into the blood, and cause a serious infection
            </div>
            <div className="lists">
                <ul>
<li style={{ fontSize: '1.2rem', color: 'red' }}>Symptoms</li>
                    <li>Appears in a circle shape.</li>
                    <li>Slowly gets biggers.</li>
                    <li>Affects only one side of your body.</li>
                    <li>Is raised and rough.</li>
                </ul>
            </div>
        </div>
        <hr/>

        <div className="d1">
            <div className="text">
                <h3>
                Benign Keratosis-like Lesions
                </h3>
            </div>
            <div className="bts" style={{ marginLeft: "2rem" }}>
                <button > <NavLink to="/Lesions/LearnMoreDisease"> Learn more </NavLink> </button>
                <button className="sign" onClick={dropDownfun}> +</button>

            </div>
        </div>
        <div className="bottom_content" >
            <div className="texts">
                Benign Keratosis-like Lesions (BKL) refer to non-cancerous skin lesions that resemble keratosis, a condition characterized by the thickening of the outer layer of the skin. These lesions can take various forms and may have different appearances. It's important to note that a definitive diagnosis should be made by a healthcare professional after a thorough examination
            </div>
            <div className="lists">
                <ul>
<li style={{ fontSize: '1.2rem', color: 'red' }}>Symptoms</li>
                    <li>Waxy or scaly appearance.</li>
                    <li>Rough, scaly patches on sun-exposed areas.</li>
                    <li>Small, rough bumps on the skin.</li>
                    <li>Small, wart-like growths with a "stuck-on" appearance.</li>
                </ul>
            </div>
        </div>
        <hr/>

        <div className="d1">
            <div className="text">
                <h3>
                Psoriasis pictures Lichen Planus
                </h3>
            </div>
            <div className="bts">
                <button > <NavLink to="/PsoriasispicturesLichenPlanus/LearnMoreDisease"> Learn more </NavLink> </button>
                <button className="sign" onClick={dropDownfun}> +</button>

            </div>
        </div>
        <div className="bottom_content">
            <div className="texts">
                Psoriasis is a lifelong autoimmune condition. It is a genetic disease that results in skin cells turning over too quickly. This turnover can cause scales and patches to build up on the skin’s surface. Outbreaks may vary in intensity and can come and go over time.
                Lichen planus is an inflammatory skin condition that can cause bumps or lesions to appear on your skin, in your mouth, or on your nails. There is no known cause of lichen planus, and it usually disappears on its own. Most cases last about 2 years. 
            </div>
            <div className="lists">
                <ul>
<li style={{ fontSize: '1.2rem', color: 'red' }}>Symptoms</li>
                    <li>Affects the wrists, lower back, or ankles.</li>
                    <li>Bumps that are sometimes itchy.</li>
                    <li>Thick, red patches of dry skin (plaques).</li>
                    <li>Thickened, yellow fingernails or toenails</li>
                </ul>
            </div>
        </div>
        <hr/>

            </div>
        </>

    )
}
