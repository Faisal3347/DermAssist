import './App.css';
import Navbar from './components/Navbar';
import DiseaseInfo from './components/DiseaseInfo';
import Output from './components/Output.js';

import LearnMoreDisease from './components/LearnMoreDisease';

import Eczema_img1 from './components/imag_coll/Eczema/Eczema_img1.png';
import Eczema_img2 from './components/imag_coll/Eczema/Eczema_img2.png';
import Eczema_img3 from './components/imag_coll/Eczema/Eczema_img3.png';
import Eczema_img4 from './components/imag_coll/Eczema/Eczema_img4.jpg';

import Melanoma_img1 from './components/imag_coll/Melanoma/Melanoma_img1.jpg';
import Melanoma_img2 from './components/imag_coll/Melanoma/Melanoma_img2.png';
import Melanoma_img3 from './components/imag_coll/Melanoma/Melanoma_img3.jpg';
import Melanoma_img4 from './components/imag_coll/Melanoma/Melanoma_img4.png';

import Atopic_Dermatitis_img1 from './components/imag_coll/Atopic_Dermatitis/Atopic_Dermatitis_img1.png';
import Atopic_Dermatitis_img2 from './components/imag_coll/Atopic_Dermatitis/Atopic_Dermatitis_img2.png';
import Atopic_Dermatitis_img3 from './components/imag_coll/Atopic_Dermatitis/Atopic_Dermatitis_img3.png';
import Atopic_Dermatitis_img4 from './components/imag_coll/Atopic_Dermatitis/Atopic_Dermatitis_img4.png';

import Melanocytic_Nevi_img1 from './components/imag_coll/Melanocytic_Nevi/Melanocytic_Nevi_img1.jpg';
import Melanocytic_Nevi_img2 from './components/imag_coll/Melanocytic_Nevi/Melanocytic_Nevi_img2.jpg';
import Melanocytic_Nevi_img3 from './components/imag_coll/Melanocytic_Nevi/Melanocytic_Nevi_img3.jpg';
import Melanocytic_Nevi_img4 from './components/imag_coll/Melanocytic_Nevi/Melanocytic_Nevi_img4.jpg';

import warts_molluscum_img1 from './components/imag_coll/Warts_Molluscum/Warts_Molluscum_img1.jpg';
import warts_molluscum_img2 from './components/imag_coll/Warts_Molluscum/Warts_Molluscum_img2.jpg';
import warts_molluscum_img3 from './components/imag_coll/Warts_Molluscum/Warts_Molluscum_img3.jpg';
import warts_molluscum_img4 from './components/imag_coll/Warts_Molluscum/Warts_Molluscum_img4.jpg';

import Basal_Cell_Carcinoma_img1 from './components/imag_coll/Basal_Cell_Carcinoma/Basal_Cell_Carcinoma_img1.jpg';
import Basal_Cell_Carcinoma_img2 from './components/imag_coll/Basal_Cell_Carcinoma/Basal_Cell_Carcinoma_img2.jpg';
import Basal_Cell_Carcinoma_img3 from './components/imag_coll/Basal_Cell_Carcinoma/Basal_Cell_Carcinoma_img3.jpg';
import Basal_Cell_Carcinoma_img4 from './components/imag_coll/Basal_Cell_Carcinoma/Basal_Cell_Carcinoma_img4.jpg';

import seborrheic_keratoses_img1 from './components/imag_coll/seborrheic_keratoses/seborrheic_keratoses_img1.jpg';
import seborrheic_keratoses_img2 from './components/imag_coll/seborrheic_keratoses/seborrheic_keratoses_img2.jpg';
import seborrheic_keratoses_img3 from './components/imag_coll/seborrheic_keratoses/seborrheic_keratoses_img3.jpg';
import seborrheic_keratoses_img4 from './components/imag_coll/seborrheic_keratoses/seborrheic_keratoses_img4.jpg';

import Tinea_Ringworm_Candidiasis_img1 from './components/imag_coll/Tinea_Ringworm_Candidiasis/Tinea_Ringworm_Candidiasis_img1.jpg';
import Tinea_Ringworm_Candidiasis_img2 from './components/imag_coll/Tinea_Ringworm_Candidiasis/Tinea_Ringworm_Candidiasis_img2.jpg';
import Tinea_Ringworm_Candidiasis_img3 from './components/imag_coll/Tinea_Ringworm_Candidiasis/Tinea_Ringworm_Candidiasis_img3.jpg';
import Tinea_Ringworm_Candidiasis_img4 from './components/imag_coll/Tinea_Ringworm_Candidiasis/Tinea_Ringworm_Candidiasis_img4.jpg';

import Lesions_img1 from './components/imag_coll/Lesions/Lesions_img1.jpg';
import Lesions_img2 from './components/imag_coll/Lesions/Lesions_img2.jpg';
import Lesions_img3 from './components/imag_coll/Lesions/Lesions_img3.jpg';
import Lesions_img4 from './components/imag_coll/Lesions/Lesions_img4.jpg';

import Psoriasis_pictures_Lichen_Planus_img1 from './components/imag_coll/Psoriasis_pictures_Lichen_Planus/Psoriasis_pictures_Lichen_Planus_img1.jpg';
import Psoriasis_pictures_Lichen_Planus_img2 from './components/imag_coll/Psoriasis_pictures_Lichen_Planus/Psoriasis_pictures_Lichen_Planus_img2.jpg';
import Psoriasis_pictures_Lichen_Planus_img3 from './components/imag_coll/Psoriasis_pictures_Lichen_Planus/Psoriasis_pictures_Lichen_Planus_img3.jpg';
import Psoriasis_pictures_Lichen_Planus_img4 from './components/imag_coll/Psoriasis_pictures_Lichen_Planus/Psoriasis_pictures_Lichen_Planus_img4.jpg';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Feature from './components/Feature.js';
import How_works from './components/How_works.js';
import Benefit from './components/Benefit.js';


function App() {
  return (
    <>
      <BrowserRouter>


      <Routes>
  <Route path="/" element={<Navbar />} />
  <Route path="/Diseaseinfo" element={<DiseaseInfo />} />
  <Route path="/FeatureInfo" element={<Feature />} />
  <Route path="/How_It_Works" element={<How_works />} />
  <Route path="/Benefit" element={<Benefit />} />
  <Route path="/Output" element={<Output />} />
  <Route
    path="/LearnMoreDisease"
    element={<LearnMoreDisease title="Default Title" />}
  />
  <Route
    path="/Eczema/LearnMoreDisease"
    element={<LearnMoreDisease title="Eczema " text1="Atopic dermatitis, commonly referred to as eczema, is a chronic skin condition characterized by inflammation, dryness, and persistent itching. While it frequently begins in childhood, it can affect individuals of any age. The condition presents with dry, itchy skin that can become red and inflamed during flare-ups. Atopic dermatitis is considered a chronic condition, meaning it persists over the long term, and it tends to follow a pattern of periodic exacerbations and periods of relative relief."   text2="Individuals with atopic dermatitis may experience discomfort and a decreased quality of life due to the persistent itching and the visible impact on the skin. Moreover, there is a notable association between atopic dermatitis and other allergic conditions, including food allergies, hay fever, and asthma."  text3="Managing atopic dermatitis involves adopting regular moisturizing routines, implementing gentle skin care practices, and identifying and avoiding potential triggers. In severe cases or during flare-ups, dermatologists may prescribe medicated ointments or creams to alleviate symptoms and reduce inflammation. Lifestyle considerations, such as clothing choices and stress management, also play a crucial role in effectively managing this condition."  img1={Eczema_img1}  img2={Eczema_img2} img3={Eczema_img3}  img4={Eczema_img4}    sym1="Intense and Persistent Itching" causes="Eczema, or atopic dermatitis, can lead to scarring due to specific factors associated with its inflammatory nature and the body's response to skin damage. Here are the primary causes of eczema scarring:Inflammatory Response: Eczema is characterized by chronic inflammation of the skin. The ongoing inflammation can disrupt the normal healing process, leading to alterations in collagen production and skin regeneration. This inflammatory response is a key factor in the development of scars.
    Persistent Scratching: Intense itching is a hallmark symptom of eczema, and individuals often respond by scratching the affected areas. Persistent and vigorous scratching can damage the skin barrier, exacerbate inflammation, and contribute to the formation of scars. "  causes2="Loss of Skin Barrier Integrity: Eczema compromises the integrity of the skin barrier, making it more susceptible to damage. When the skin's natural protective barrier is compromised, the healing process may result in structural changes, contributing to the formation of scars.Genetic Factors: Genetic predispositions play a role in the development and severity of eczema. Individuals with a family history of atopic conditions may be more prone to experiencing severe inflammation and, subsequently, a higher risk of scarring.
" sym2="Redness and Skin Inflammation" sym3="Excessively Dry or Scaly Skin" sym4="Increased Allergy and Asthma Risk"/>}
  />


<Route
    path="/Melanoma/LearnMoreDisease"
    element={<LearnMoreDisease 
        title="Melanoma" 
        text1="Melanoma is a type of skin cancer that originates in the pigment-producing cells known as melanocytes. It is characterized by the uncontrolled growth of melanocytes, leading to the formation of malignant tumors. Melanoma is often associated with exposure to ultraviolet (UV) radiation from the sun or artificial sources, such as tanning beds."   
        text2="Early detection of melanoma is crucial for successful treatment. It typically appears as an unusual mole or pigmented lesion on the skin, and changes in size, color, or shape should be promptly evaluated by a healthcare professional. Melanoma can metastasize, or spread, to other parts of the body, making it a potentially serious and life-threatening condition if not addressed in its early stages."  
        text3="Preventive measures include the use of sunscreen, protective clothing, and regular skin examinations. Treatment options for melanoma may involve surgical removal of the tumor, immunotherapy, chemotherapy, or targeted therapy, depending on the stage and extent of the disease. Dermatologists and oncologists play a crucial role in the diagnosis, management, and ongoing monitoring of individuals with melanoma."  
        img1={Melanoma_img1}  
        img2={Melanoma_img2} 
        img3={Melanoma_img3}  
        img4={Melanoma_img4}    
        sym1="Unusual Mole or Lesion"
        causes="Melanoma often presents as an atypical mole or pigmented lesion on the skin. Changes in size, color, or shape should be promptly evaluated by a healthcare professional to rule out melanoma. Regular self-examinations and professional skin checks are essential for early detection and treatment."
        causes2="UV Radiation Exposure: Prolonged exposure to ultraviolet (UV) radiation from the sun or tanning beds is a significant risk factor for melanoma. UV radiation can damage the DNA in skin cells, leading to the development of cancerous cells."

        sym2="Metastasis and Spread"
        sym3="Preventive Measures"
        sym4="Treatment Options"/>}
/>


<Route
    path="/AtopicDermatitis/LearnMoreDisease"
    element={<LearnMoreDisease 
        title="Atopic Dermatitis" 
        text1="Atopic dermatitis, commonly referred to as eczema, is a chronic skin condition characterized by inflammation, dryness, and persistent itching. While it frequently begins in childhood, it can affect individuals of any age. The condition presents with dry, itchy skin that can become red and inflamed during flare-ups. Atopic dermatitis is considered a chronic condition, meaning it persists over the long term, and it tends to follow a pattern of periodic exacerbations and periods of relative relief."   
        text2="Individuals with atopic dermatitis may experience discomfort and a decreased quality of life due to the persistent itching and the visible impact on the skin. Moreover, there is a notable association between atopic dermatitis and other allergic conditions, including food allergies, hay fever, and asthma."  
        text3="Managing atopic dermatitis involves adopting regular moisturizing routines, implementing gentle skin care practices, and identifying and avoiding potential triggers. In severe cases or during flare-ups, dermatologists may prescribe medicated ointments or creams to alleviate symptoms and reduce inflammation. Lifestyle considerations, such as clothing choices and stress management, also play a crucial role in effectively managing this condition."  
        img1={Atopic_Dermatitis_img1}  
        img2={Atopic_Dermatitis_img2} 
        img3={Atopic_Dermatitis_img3}  
        img4={Atopic_Dermatitis_img4}    
        sym1="Intense and Persistent Itching"
        causes="Eczema, or atopic dermatitis, can lead to scarring due to specific factors associated with its inflammatory nature and the body's response to skin damage. Here are the primary causes of eczema scarring: Loss of Skin Barrier Integrity: Eczema compromises the integrity of the skin barrier, making it more susceptible to damage. When the skin's natural protective barrier is compromised, the healing process may result in structural changes, contributing to the formation of scars."
        causes2="Persistent Scratching: Intense itching is a hallmark symptom of eczema, and individuals often respond by scratching the affected areas. Persistent and vigorous scratching can damage the skin barrier, exacerbate inflammation, and contribute to the formation of scars. Genetic Factors: Predispositions play a role in the development and severity of eczema. Individuals with a family history of atopic conditions may be more prone to experiencing severe inflammation and, subsequently, a higher risk of scarring."
        sym2="Loss of Skin Barrier Integrity"
        sym3="Genetic Factors"
        sym4="Redness and Skin Inflammation"/>}
/>


<Route
    path="/MelanocyticNevi/LearnMoreDisease"
    element={<LearnMoreDisease 
        title="Melanocytic Nevi" 
        text1="Melanocytic nevi, commonly known as moles, are clusters of pigmented cells called melanocytes that appear on the skin. These nevi are usually harmless and can develop anywhere on the body. While most moles are benign, some may exhibit atypical features, warranting closer attention and monitoring to rule out the possibility of melanoma, a type of skin cancer."   
        text2="Moles can vary in size, color, and shape. They may be flat or raised, and their color can range from flesh-toned to dark brown. The number of moles on an individual's skin can also vary. It is essential to be aware of any changes in the appearance of moles, as alterations in size, color, or shape may indicate a potential issue."  
        text3="Regular self-examinations and professional skin checks are crucial for monitoring melanocytic nevi. Dermatologists may recommend removal of atypical moles for further examination under a microscope (biopsy) to determine whether they are cancerous. Protecting the skin from excessive sun exposure can help reduce the risk of developing new moles and safeguard existing ones."  
        img1={Melanocytic_Nevi_img1}  
        img2={Melanocytic_Nevi_img2} 
        img3={Melanocytic_Nevi_img3}  
        img4={Melanocytic_Nevi_img4}    
        sym2="Flat or Raised Appearance"
        sym1="Variation in Size, Color, and Shape"
        causes="Melanocytic nevi can vary in their characteristics, including size, color, and shape. While most moles are benign, any noticeable changes should be promptly evaluated by a dermatologist. Some moles may exhibit atypical features, such as irregular borders or uneven color distribution, which may warrant closer monitoring and, in some cases, biopsy for further examination. Protecting the skin from the sun's harmful UV rays is crucial for preventing potential issues with melanocytic nevi."
        causes2="Other Factors to ConsiderNumber of Moles: The number of moles on an individual's skin can vary. It is essential to keep track of any changes in the quantity and characteristics of moles, as an increased number may be associated with a higher risk of melanoma.Sun Exposure: Excessive sun exposure is a risk factor for the development of new moles and the alteration of existing ones."
        sym3="Importance of Regular Skin Checks"
        sym4="Sun Protection and Prevention"/>}

/>

<Route
    path="/WartsMolluscum/LearnMoreDisease"
    element={<LearnMoreDisease 
        title="Warts and Molluscum" 
        text1="Warts and molluscum contagiosum are common skin conditions caused by viral infections. These conditions can affect people of all ages and often present as small growths on the skin. While they are generally harmless, they can be unsightly and, in some cases, cause mild discomfort or itching."   
        text2="Warts are caused by the human papillomavirus (HPV) and can appear on various parts of the body. They may be rough or smooth, raised or flat. Molluscum contagiosum is caused by a poxvirus and typically manifests as small, firm bumps with a central indentation. Both conditions are contagious and can spread through direct skin-to-skin contact or contact with contaminated objects."  
        text3="Treatment for warts and molluscum contagiosum may include topical medications, cryotherapy (freezing), or other minor surgical procedures. In many cases, these growths may resolve on their own without intervention. However, individuals are advised to seek medical attention for proper diagnosis and management, especially if there are concerns about the appearance, growth, or persistence of these skin lesions."  
        img1={warts_molluscum_img1}  
        img2={warts_molluscum_img2} 
        img3={warts_molluscum_img3}  
        img4={warts_molluscum_img4}    
        sym1="Variety of Growth Types"
        sym2="Contagious Nature"
        sym3="Treatment Options"
        sym4="Seeking Medical Attention"
        causes="Warts and molluscum contagiosum are common skin conditions caused by viral infections. Warts are caused by the human papillomavirus (HPV), resulting in various types of growths on the skin. Molluscum contagiosum is caused by a poxvirus, typically appearing as small, firm bumps with a central indentation.Contagious Spread: Both warts and molluscum contagiosum are contagious and can spread through direct skin-to-skin contact or contact with contaminated objects. Practicing good hygiene is essential to prevent transmission."
        causes2="Topical Medications: Treatment options for warts and molluscum contagiosum may include topical medications applied directly to the affected areas. Cryotherapy, involving freezing the growths, and minor surgical procedures are also common interventions.Natural Resolution: In many cases, warts and molluscum contagiosum may resolve on their own without specific intervention. However, seeking medical attention is advisable for proper diagnosis and management, particularly if there are concerns about the appearance, growth, or persistence of these skin lesions."
        />}
/>

<Route
    path="/BasalCellCarcinoma/LearnMoreDisease"
    element={<LearnMoreDisease 
        title="Basal Cell Carcinoma" 
        text1="Basal cell carcinoma (BCC) is the most common type of skin cancer. It typically develops in areas of the skin that are frequently exposed to the sun, such as the face and neck. BCC is slow-growing and rarely metastasizes, but it can cause local tissue damage if left untreated."   
        text2="This type of skin cancer often presents as a shiny, pearly bump or a pinkish patch on the skin. BCC may also appear as a non-healing sore, which can bleed or ooze. Chronic sun exposure is a significant risk factor for the development of basal cell carcinoma, and individuals with fair skin are generally more susceptible."  
        text3="Early detection and treatment are crucial for managing basal cell carcinoma. Dermatologists may employ various techniques for removal, including surgical excision, cryotherapy, and laser therapy. While BCC is generally associated with a high cure rate, ongoing surveillance and sun protection are essential to prevent recurrence and the development of new skin cancers."  
        img1={Basal_Cell_Carcinoma_img1}  
        img2={Basal_Cell_Carcinoma_img2} 
        img3={Basal_Cell_Carcinoma_img3}  
        img4={Basal_Cell_Carcinoma_img4}    
        sym1="Most Common Skin Cancer"
        sym2="Characteristics and Appearance"
        sym3="Risk Factors"
        sym4="Management and Prevention"
        causes="Basal cell carcinoma (BCC) is the most prevalent type of skin cancer. It commonly develops in sun-exposed areas, such as the face and neck, and is associated with chronic sun exposure.Chronic Sun Exposure: Prolonged exposure to ultraviolet (UV) radiation from the sun is a significant risk factor for the development of basal cell carcinoma. Fair-skinned individuals are generally more susceptible.Early detection and treatment contribute to a high cure rate.
        Ongoing Surveillance: Regular skin checks and ongoing surveillance are crucial to monitor for recurrence and the development of new skin cancers. Sun protection measures are essential for prevention."
        causes2="Shiny, Pearly Bump: BCC often presents as a shiny, pearly bump on the skin, which may have a translucent quality. It can also manifest as a pinkish patch or a non-healing sore that bleeds or oozes Early Detection and Treatment
        Various Removal Techniques: Dermatologists may use different techniques for removal, including surgical excision, cryotherapy, and laser therapy." />
    }
/>

<Route
    path="/SeborrheicKeratoses/LearnMoreDisease"
    element={<LearnMoreDisease 
        title="Seborrheic Keratoses" 
        text1="Seborrheic keratoses are common non-cancerous skin growths that often appear with age. These growths are characterized by a waxy, scaly, or rough surface and can vary in color, including shades of tan, brown, or black. While seborrheic keratoses are generally harmless, they can be aesthetically bothersome to some individuals."   
        text2="These skin growths usually develop on areas of the body that have undergone sun exposure, such as the face, chest, back, or shoulders. Seborrheic keratoses can have a varied appearance, ranging from flat and smooth to raised and warty. They are not contagious and do not pose a risk of developing into skin cancer."  
        text3="While seborrheic keratoses do not require treatment for medical reasons, individuals may choose to have them removed if they become irritated, itchy, or if there are concerns about their appearance. Dermatologists may use various methods for removal, including cryotherapy, laser therapy, or simple excision."  
        img1={seborrheic_keratoses_img1}  
        img2={seborrheic_keratoses_img2} 
        img3={seborrheic_keratoses_img3}  
        img4={seborrheic_keratoses_img4}    
        sym1="Common Non-Cancerous Growths"
        sym2="Appearance and Development"
        sym3="Non-Cancerous Nature"
        sym4="Individual Choice for Removal"
        causes="Seborrheic keratoses are common non-cancerous skin growths that often appear with age. They are characterized by a waxy, scaly, or rough surface and can vary in color, including shades of tan, brown, or black.Sun-Exposed Areas: Seborrheic keratoses typically develop on areas of the body that have undergone sun exposure, such as the face, chest, back, or shoulders. They can have a varied appearance, ranging from flat and smooth to raised and warty."
        causes2="Harmless and Non-Contagious: Seborrheic keratoses are generally harmless and non-contagious. They do not pose a risk of developing into skin cancer.Treatment and RemovalIrritation or Itchiness: While seborrheic keratoses do not require treatment for medical reasons, individuals may choose to have them removed if they become irritated, itchy, or if there are concerns about their appearance.Dermatological Removal Methods: Dermatologists may use various methods for removal, including cryotherapy, laser therapy, or simple excision."/>
    }
/>

<Route
    path="/TineaRingwormCandidiasis/LearnMoreDisease"
    element={<LearnMoreDisease 
        title="Tinea Ringworm  Candidiasis" 
        text1="Tinea, commonly known as ringworm, and candidiasis are fungal infections that affect the skin. These infections can cause red, itchy, and inflamed areas on the skin and are often characterized by a circular or ring-like appearance. While tinea can affect various parts of the body, candidiasis is often associated with warm and moist areas, such as the genital region."   
        text2="Tinea is caused by different species of fungi called dermatophytes and can manifest as ring-shaped rashes on the body, scalp, feet (athlete's foot), or groin (jock itch). Candidiasis, on the other hand, is caused by the overgrowth of Candida yeast and can lead to infections such as oral thrush or genital yeast infections."  
        text3="Treatment for tinea and candidiasis typically involves antifungal medications, which may be topical or oral, depending on the severity and location of the infection. Maintaining good hygiene practices, keeping the affected areas dry, and avoiding sharing personal items can help prevent the spread of these fungal infections."  
        img1={Tinea_Ringworm_Candidiasis_img1}  
        img2={Tinea_Ringworm_Candidiasis_img2} 
        img3={Tinea_Ringworm_Candidiasis_img3}  
        img4={Tinea_Ringworm_Candidiasis_img4}    
        sym1="Fungal Skin Infections"
        sym2="Common Manifestations"
        sym3="Treatment with Antifungal Medications"
        sym4="Preventing Spread and Recurrence"
        causes="Tinea, commonly known as ringworm, and candidiasis are fungal infections that affect the skin. Tinea is caused by dermatophytes, resulting in ring-shaped rashes on various parts of the body. Candidiasis is caused by the overgrowth of Candida yeast and can lead to infections in warm and moist areas, such as the genital region.Ring-Shaped Rashes: Tinea infections often present as circular or ring-shaped rashes on the body, scalp, feet, or groin. Candidiasis can manifest as red, itchy areas in warm and moist regions, leading to conditions like oral thrush or genital yeast infections."
        causes2="Topical or Oral Medications: Treatment for tinea and candidiasis typically involves antifungal medications. The choice between topical or oral medication depends on the severity and location of the infection.Prevention and HygieneGood Hygiene Practices: Maintaining good hygiene practices, such as keeping the affected areas dry and avoiding sharing personal items, is essential to prevent the spread of tinea and candidiasis.Avoiding Moist Environments: Since candidiasis thrives in warm and moist environments, it's crucial to keep these areas dry to prevent recurrent infections."/>
    }
/>

<Route
    path="/Lesions/LearnMoreDisease"
    element={<LearnMoreDisease 
        title="Benign Keratosis Lesions" 
        text1="Benign keratosis-like lesions refer to a group of non-cancerous skin growths that share characteristics with keratosis, which involves the overgrowth of keratin on the skin's outer layer. These lesions often appear as rough, scaly patches or bumps and are generally harmless. While they are not cancerous, their appearance may cause concern for some individuals."   
        text2="Common examples of benign keratosis-like lesions include seborrheic keratosis, actinic keratosis, and keratosis pilaris. Seborrheic keratosis presents as wart-like growths, often with a brown or black color. Actinic keratosis is related to sun exposure and may appear as rough, scaly patches. Keratosis pilaris is characterized by small, rough bumps, typically on the arms, thighs, or buttocks."  
        text3="While these lesions are generally harmless, individuals may choose to have them evaluated by a dermatologist, especially if there are changes in size, shape, or color. Treatment options may include cryotherapy, laser therapy, or simple excision for cosmetic reasons or if there are concerns about the lesions' appearance."  
        img1={Lesions_img1}  
        img2={Lesions_img2} 
        img3={Lesions_img3}  
        img4={Lesions_img4}    
        sym1="Non-Cancerous Skin Growths"
        sym2="Common Examples"
        sym3="Evaluation and Treatment"
        sym4="Cosmetic Concerns"
        causes="Benign keratosis-like lesions are a group of non-cancerous skin growths that share characteristics with keratosis. These growths often appear as rough, scaly patches or bumps and are generally harmless.Seborrheic Keratosis: Wart-like growths often with a brown or black color. Actinic Keratosis: Rough, scaly patches related to sun exposure. Keratosis Pilaris: Small, rough bumps, typically on the arms, thighs, or buttocks."
        causes2="Dermatologist Evaluation: While these lesions are generally harmless, individuals may choose to have them evaluated by a dermatologist, especially if there are changes in size, shape, or color.Treatment Options: Treatment options may include cryotherapy, laser therapy, or simple excision for cosmetic reasons or if there are concerns about the lesions' appearance.Individual Choice: In some cases, individuals may opt for removal due to cosmetic concerns or if the appearance of these lesions causes discomfort or anxiety."/>
    }
/>

<Route
    path="/PsoriasispicturesLichenPlanus/LearnMoreDisease"
    element={<LearnMoreDisease 
        title="Psoriasis and Lichen Planus" 
        text1="Psoriasis and Lichen Planus are chronic skin conditions that can cause discomfort and affect the quality of life. While they share some similarities, they have distinct characteristics and require different approaches to management."   
        text2="Psoriasis is an autoimmune condition that results in the rapid buildup of skin cells, leading to red, itchy, and scaly patches. It often affects areas like elbows, knees, and the scalp. Lichen Planus, on the other hand, is an inflammatory condition characterized by purplish, flat-topped bumps that may cause itching and discomfort. It can affect the skin, mucous membranes, and nails."  
        text3="Treatment for Psoriasis and Lichen Planus involves various approaches. Psoriasis management may include topical treatments, phototherapy, or systemic medications, depending on the severity. Lichen Planus may be treated with topical corticosteroids, antihistamines, or other medications to alleviate symptoms. Both conditions benefit from medical evaluation for an accurate diagnosis and tailored treatment plan."  
        img1={Psoriasis_pictures_Lichen_Planus_img1}  
        img2={Psoriasis_pictures_Lichen_Planus_img2} 
        img3={Psoriasis_pictures_Lichen_Planus_img3}  
        img4={Psoriasis_pictures_Lichen_Planus_img4}    
        sym1="Chronic Skin Conditions"
        sym2="Psoriasis Features"
        sym3="Lichen Planus Features"
        sym4="Treatment Approaches"
        cause="Psoriasis and Lichen Planus are chronic skin conditions that can cause discomfort and affect the quality of life. They have distinct characteristics and require different approaches to management.Rapid Skin Cell Buildup: Psoriasis results in the rapid buildup of skin cells, leading to red, itchy, and scaly patches. Commonly affects areas like elbows, knees, and the scalp.Purplish, Flat-Topped Bumps: Lichen Planus is an inflammatory condition characterized by purplish, flat-topped bumps that may cause itching and discomfort. It can affect the skin, mucous membranes, and nails."
        cause4="Psoriasis Management: Treatment may include topical treatments, phototherapy, or systemic medications, depending on the severity of Psoriasis.Lichen Planus Treatment: Management may involve topical corticosteroids, antihistamines, or other medications to alleviate symptoms of Lichen Planus.Medical EvaluationAccurate Diagnosis and Tailored Treatment: Both conditions benefit from medical evaluation for an accurate diagnosis and a tailored treatment plan."/>
    }

/>


</Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
