import Header from "./component/Header";
import { LanguageContext } from "./context";
import { useMemo, useState } from "react";
import TimeComponent from "./component/TimeComponent";
function App() {
    let allLanguage = useMemo(
        () => [
            {
                language: "en-US",
                country: "US",
                fullName: "United States Of America",
            },
            { language: "en-GB", country: "GB", fullName: "United Kingdom" },
            { language: "pt-BR", country: "BR", fullName: "Brazil" },
            { language: "ar-EG", country: "EG", fullName: "Egypt" },
            { language: "HI", country: "IN", fullName: "India" },
        ],
        []
    );
    const [language, setLanguage] = useState(allLanguage[0].language);
    // const language = useContext(LanguageContext);
    return (
        <div className="App">
            <LanguageContext.Provider
                value={{ allLanguage, language, setLanguage }}
            >
                <Header></Header>
                <TimeComponent></TimeComponent>
            </LanguageContext.Provider>
        </div>
    );
}

export default App;
