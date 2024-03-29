import { useContext } from "react";
import { Container, Form, Navbar } from "react-bootstrap";
import { LanguageContext } from "../context";

function Header() {
    let { allLanguage, language, setLanguage } = useContext(LanguageContext);
    return (
        <LanguageContext.Provider value={language}>
            <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Univarsal Time</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>Select Language : </Navbar.Text>
                        <Form className="d-flex">
                            <Form.Select
                                aria-label="Select Language"
                                onChange={(e) => setLanguage(e.target.value)}
                                value={language}
                            >
                                {allLanguage.map((x, i) => (
                                    <option value={x.language} key={i}>
                                        {x.language}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </LanguageContext.Provider>
    );
}

export default Header;
